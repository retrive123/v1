import { NgModule } from '@angular/core';

import { NewappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NewappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NewappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NewappSharedCommonModule {}
