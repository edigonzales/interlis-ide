import { inject, injectable } from 'inversify';
import { Disposable, DisposableCollection } from '@theia/core';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { ILogger } from '@theia/core';

import './style/webview-drag-mitigation.css';

const DRAGGING_CLASS = 'theia-webview-dragging-split';
const SPLIT_HANDLE_SELECTOR = '.theia-sash, .split-handle, .p-SplitPanel-handle, .splitpanes__splitter, .monaco-sash';

@injectable()
export class WebviewDragMitigationFrontendContribution implements FrontendApplicationContribution {

    @inject(ILogger)
    protected readonly logger: ILogger;

    protected readonly toDispose = new DisposableCollection();

    onStart(): void {
        if (typeof document === 'undefined' || typeof window === 'undefined') {
            return;
        }

        this.logger.info('[webview-drag-mitigation] enabling split drag mitigation');

        let dragActive = false;

        const isSplitHandle = (element: Element | null): boolean => {
            if (!element) {
                return false;
            }
            if (element.classList?.contains('theia-sash') || element.classList?.contains('split-handle') || element.classList?.contains('monaco-sash')) {
                return true;
            }
            return !!element.closest(SPLIT_HANDLE_SELECTOR);
        };

        const classListHost = () => document.body ?? document.documentElement;

        const activateDrag = () => {
            if (!dragActive) {
                const host = classListHost();
                if (!host) {
                    return;
                }
                dragActive = true;
                host.classList.add(DRAGGING_CLASS);
            }
        };

        const endDrag = () => {
            if (dragActive) {
                const host = classListHost();
                if (host) {
                    host.classList.remove(DRAGGING_CLASS);
                }
                dragActive = false;
            }
        };

        const pointerDownListener = (event: PointerEvent) => {
            const target = event.target as Element | null;
            if (isSplitHandle(target)) {
                activateDrag();
            }
        };

        const keyDownListener = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                endDrag();
            }
        };

        const visibilityListener = () => {
            if (document.visibilityState !== 'visible') {
                endDrag();
            }
        };

        document.addEventListener('pointerdown', pointerDownListener, true);
        this.toDispose.push(Disposable.create(() => document.removeEventListener('pointerdown', pointerDownListener, true)));

        window.addEventListener('pointerup', endDrag, true);
        this.toDispose.push(Disposable.create(() => window.removeEventListener('pointerup', endDrag, true)));

        window.addEventListener('pointercancel', endDrag, true);
        this.toDispose.push(Disposable.create(() => window.removeEventListener('pointercancel', endDrag, true)));

        window.addEventListener('blur', endDrag, true);
        this.toDispose.push(Disposable.create(() => window.removeEventListener('blur', endDrag, true)));

        document.addEventListener('keydown', keyDownListener, true);
        this.toDispose.push(Disposable.create(() => document.removeEventListener('keydown', keyDownListener, true)));

        document.addEventListener('visibilitychange', visibilityListener, true);
        this.toDispose.push(Disposable.create(() => document.removeEventListener('visibilitychange', visibilityListener, true)));
    }

    onStop(): void {
        this.toDispose.dispose();
        if (typeof document !== 'undefined') {
            const host = document.body ?? document.documentElement;
            host?.classList.remove(DRAGGING_CLASS);
        }
    }
}
