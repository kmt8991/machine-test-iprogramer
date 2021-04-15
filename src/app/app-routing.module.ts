import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageListingLayoutComponent } from './components/image-listing-layout/image-listing-layout.component';

const routes: Routes = [{ path: '', component: ImageListingLayoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
