import { inject, injectable } from 'inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { ILogger } from '@theia/core';
import { DisposableCollection } from '@theia/core/lib/common/disposable';
import '../../src/browser/style/webview-drag-mitigation.css';

/**
 * Frontend contribution that temporarily disables pointer events on webviews during split handle drags.
 *
 * Theia regressions around pointer capture allow embedded iframes/webviews to swallow the pointerup event
 * which leaves the sash "stuck" to the cursor. By toggling a CSS class while the drag is active we ensure
 * the splitter always receives the pointerup/cancel notifications.
 */
@injectable()
export class WebviewDragMitigationFrontendContribution implements FrontendApplicationContribution {

    @inject(ILogger)
    protected readonly logger: ILogger;

    protected readonly toDispose = new DisposableCollection();

    onStart(): void {
        this.logger.info('[webview-drag-mitigation] installing global drag listeners');

        let dragActive = false;

        const isSplitHandle = (element: Element | null): boolean => {
            if (!element) {
                return false;
            }

            const handleSelectors = [
                '.theia-sash',
                '.split-handle',
                '.p-SplitPanel-handle',
                '.p-Widget.p-SplitPanel-handle',
                '.splitpanes__splitter',
                '.theia-app-split-handle'
            ];

            for (const selector of handleSelectors) {
                if ((element as HTMLElement).matches?.(selector)) {
                    return true;
                }
            }

            const closest = (element as HTMLElement).closest(handleSelectors.join(', '));
            return !!closest;
        };

        const beginDrag = (event: PointerEvent) => {
            const target = event.target as Element | null;
            if (isSplitHandle(target)) {
                dragActive = true;
                document.body.classList.add('dragging-split');
            }
        };

        const endDrag = () => {
            if (dragActive) {
                dragActive = false;
                document.body.classList.remove('dragging-split');
            }
        };

        const addListener = <K extends keyof DocumentEventMap>(
            target: Document | Window,
            type: K,
            listener: (event: any) => void,
            options?: boolean | AddEventListenerOptions
        ) => {
            target.addEventListener(type, listener as EventListener, options);
            this.toDispose.push({
                dispose: () => target.removeEventListener(type, listener as EventListener, options)
            });
        };

        addListener(document, 'pointerdown', beginDrag, true);
        addListener(window, 'pointerup', endDrag, true);
        addListener(window, 'pointercancel', endDrag, true);
        addListener(window, 'blur', endDrag, true);
        addListener(document, 'keydown', event => {
            if ((event as KeyboardEvent).key === 'Escape') {
                endDrag();
            }
        }, true);
    }

    onStop(): void {
        this.toDispose.dispose();
        document.body.classList.remove('dragging-split');
    }
}
