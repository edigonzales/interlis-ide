/********************************************************************************
 * Copyright (C) 2024.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { inject, injectable } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { CommonMenus } from '@theia/core/lib/browser/common-frontend-contribution';
import { ChangeKind, MenuModelRegistry } from '@theia/core/lib/common/menu';
import { GettingStartedCommand } from '@theia/getting-started/lib/browser/getting-started-contribution';

@injectable()
export class HideWelcomeMenuContribution implements FrontendApplicationContribution {

    @inject(MenuModelRegistry)
    protected readonly menuRegistry: MenuModelRegistry;

    onStart(): void {
        const expectedPath = CommonMenus.HELP.join('/');
        const removeWelcome = () => this.menuRegistry.unregisterMenuAction(GettingStartedCommand, CommonMenus.HELP);

        removeWelcome();
        this.menuRegistry.onDidChange(event => {
            if (event.kind === ChangeKind.ADDED && event.path.join('/') === expectedPath) {
                removeWelcome();
            }
        });
    }
}
