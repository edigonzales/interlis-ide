/********************************************************************************
 * Copyright (C) 2025 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 *
 * SPDX-License-Identifier: MIT
 ********************************************************************************/

export interface ProductAboutConfiguration {
    /**
     * Optional string displayed as the product version in the "About" dialog.
     * If the string contains the token `{version}` it will be replaced by the
     * current application version when rendered.
     */
    readonly productVersionLabel?: string;
    readonly copyright?: string;
    readonly iconPath?: string;
}
