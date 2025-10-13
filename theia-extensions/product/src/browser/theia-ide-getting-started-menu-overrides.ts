/********************************************************************************
 * Copyright (C) 2024.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { injectable } from '@theia/core/shared/inversify';
import { MenuContribution, MenuModelRegistry } from '@theia/core/lib/common/menu';
import { CommonMenus } from '@theia/core/lib/browser/common-frontend-contribution';
import { GettingStartedCommand } from '@theia/getting-started/lib/browser/getting-started-contribution';

@injectable()
export class TheiaIDEGettingStartedMenuOverrides implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.unregisterMenuAction(GettingStartedCommand.id, CommonMenus.HELP);
    }
}
