import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbouteComponent } from './aboute/aboute.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'aboute', component:AbouteComponent},
  {path: 'contact', component:ContactComponent},
   {path: 'courses', component:CoursesComponent},
 /*  {path: 'course', children: [
    {path: 'course/:id', component:CoursesComponent}
  ]},
 */

  
  {path: '**', component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
