/********************************************************************************
 * Copyright (C) 2025 Eclipse Theia.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License which is available at
 * https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

import { ContainerModule } from '@theia/core/shared/inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { WebviewDragGuardContribution } from './webview-drag-guard-contribution';

export default new ContainerModule(bind => {
    bind(WebviewDragGuardContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(WebviewDragGuardContribution);
});
