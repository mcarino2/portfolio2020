import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  // Shell.childRoutes([{ path: 'about', loadChildren: './about/about.module#AboutModule' }]),
  Shell.childRoutes([{ path: 'bio', loadChildren: './bio/bio.module#BioModule' }]),
  Shell.childRoutes([{ path: 'resume', loadChildren: './resume/resume.module#ResumeModule' }]),
  Shell.childRoutes([{ path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule' }]),
  Shell.childRoutes([{ path: 'skills', loadChildren: './skills/skills.module#SkillsModule' }]),
  Shell.childRoutes([{ path: 'timeline', loadChildren: './timeline/timeline.module#TimelineModule' }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
