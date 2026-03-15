/********************************************************************************
 * Copyright (C) 2026 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/
import * as fs from 'fs';
import * as path from 'path';
import { execFileSync } from 'child_process';

interface CliArgs {
    gitRef?: string;
    ref?: string;
}

const ROOT_PACKAGE_PATH = 'package.json';
const ELECTRON_PACKAGE_PATH = path.join('applications', 'electron', 'package.json');

execute();

function execute(): void {
    const args = parseArgs(process.argv.slice(2));
    const normalizedRef = normalizeReleaseRef(args.ref);

    const rootVersion = readPackageVersion(ROOT_PACKAGE_PATH, args.gitRef);
    const electronVersion = readPackageVersion(ELECTRON_PACKAGE_PATH, args.gitRef);

    assertVersionMatch('root package.json', rootVersion, 'applications/electron/package.json', electronVersion);

    if (normalizedRef && rootVersion !== normalizedRef) {
        throw new Error(`Release tag/version mismatch: expected ${normalizedRef} but found ${rootVersion}.`);
    }

    console.log(`Release version check passed for ${args.gitRef ?? 'working tree'}: ${rootVersion}`);
}

function parseArgs(argv: string[]): CliArgs {
    const args: CliArgs = {};

    for (let i = 0; i < argv.length; i += 1) {
        const token = argv[i];
        if (token === '--ref') {
            args.ref = argv[i + 1];
            i += 1;
        } else if (token === '--git-ref') {
            args.gitRef = argv[i + 1];
            i += 1;
        } else {
            throw new Error(`Unknown argument: ${token}`);
        }
    }

    if (argv.includes('--ref') && !args.ref) {
        throw new Error('Missing value for --ref');
    }

    if (argv.includes('--git-ref') && !args.gitRef) {
        throw new Error('Missing value for --git-ref');
    }

    return args;
}

function normalizeReleaseRef(ref: string | undefined): string | undefined {
    if (!ref) {
        return undefined;
    }

    const withoutPrefix = ref.startsWith('refs/tags/') ? ref.slice('refs/tags/'.length) : ref;
    return withoutPrefix.startsWith('v') ? withoutPrefix.slice(1) : withoutPrefix;
}

function readPackageVersion(relativePath: string, gitRef: string | undefined): string {
    const contents = gitRef
        ? execFileSync('git', ['show', `${gitRef}:${relativePath}`], { encoding: 'utf8' })
        : fs.readFileSync(path.resolve(relativePath), { encoding: 'utf8' });

    const parsed = JSON.parse(contents) as { version?: string };
    if (!parsed.version) {
        throw new Error(`No version found in ${relativePath}`);
    }

    return parsed.version;
}

function assertVersionMatch(leftLabel: string, leftVersion: string, rightLabel: string, rightVersion: string): void {
    if (leftVersion !== rightVersion) {
        throw new Error(`${leftLabel} is ${leftVersion}, but ${rightLabel} is ${rightVersion}.`);
    }
}
