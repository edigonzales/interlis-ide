import { ContainerModule } from 'inversify';
import { FrontendApplicationContribution } from '@theia/core/lib/browser';
import { WebviewDragMitigationFrontendContribution } from './webview-drag-mitigation-frontend-contribution';

export default new ContainerModule(bind => {
    bind(WebviewDragMitigationFrontendContribution).toSelf().inSingletonScope();
    bind(FrontendApplicationContribution).toService(WebviewDragMitigationFrontendContribution);
});
