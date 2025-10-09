/********************************************************************************
 * Copyright (C) 2025 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import * as path from 'path';

import { ElectronMainApplication, ElectronMainApplicationContribution } from '@theia/core/lib/electron-main/electron-main-application';
import { app, nativeImage } from '@theia/core/electron-shared/electron';
import { injectable } from '@theia/core/shared/inversify';

import { ProductAboutConfiguration } from '../common/about-config';

@injectable()
export class AboutPanelContribution implements ElectronMainApplicationContribution {

    onStart(application: ElectronMainApplication): void {
        if (process.platform !== 'darwin') {
            return;
        }

        const aboutConfiguration = application.config.about as ProductAboutConfiguration | undefined;
        const applicationName = application.config.applicationName ?? app.getName();
        const applicationVersion = this.resolveProductVersionLabel(aboutConfiguration);
        const buildVersion = app.getVersion();
        const shouldDisplayBuildVersion = Boolean(buildVersion && !applicationVersion.includes(buildVersion));
        const options: Parameters<typeof app.setAboutPanelOptions>[0] = {
            applicationName,
            applicationVersion,
        };

        if (aboutConfiguration?.copyright) {
            options.copyright = aboutConfiguration.copyright;
        }
        if (aboutConfiguration?.iconPath) {
            const configuredPath = aboutConfiguration.iconPath;
            const iconPath = path.isAbsolute(configuredPath)
                ? configuredPath
                : path.resolve(app.getAppPath(), configuredPath);
            const icon = nativeImage.createFromPath(iconPath);
            if (!icon.isEmpty()) {
                options.iconPath = iconPath;
            }
        }
        if (shouldDisplayBuildVersion) {
            options.version = buildVersion;
        }

        app.setAboutPanelOptions(options);
    }

    protected resolveProductVersionLabel(configuration: ProductAboutConfiguration | undefined): string {
        const configuredVersionLabel = configuration?.productVersionLabel;
        if (configuredVersionLabel && configuredVersionLabel.trim().length > 0) {
            return configuredVersionLabel;
        }
        return `Version ${app.getVersion()}`;
    }

}
