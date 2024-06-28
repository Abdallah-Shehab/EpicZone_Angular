import { GamesComponent } from './../Components/games/games.component';
import { Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from '../Components/home/home.component';
import { GameDetailsComponent } from '../Components/games/game-details/game-details.component';
import { DashBoardComponent } from '../Components/dash-board/dash-board.component';
import {  DashFormComponentent } from '../Components/dash-board/dash-form/dash-form.component';
import { LoginComponent } from '../Components/login/login.component';
import { RegisterComponent } from '../Components/register/register.component';
import { canActivateGuard } from '../Services/auth-guard.service';
import { NotFoundComponent } from '../Components/not-found/not-found.component';
 

export const routes: Routes = [

    {path: '', component:HomeComponent},
    { path:'games',component:GamesComponent},
    { path:'games/gameDetails/:id',component:GameDetailsComponent},
    { path:'Dashboard',component:DashBoardComponent, canActivate: [canActivateGuard]},
    // { path:'Dashboard',component:DashBoardComponent},
    {path:'Dashboard/Edit/:id',component:DashFormComponentent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'**',component:NotFoundComponent}
];
 