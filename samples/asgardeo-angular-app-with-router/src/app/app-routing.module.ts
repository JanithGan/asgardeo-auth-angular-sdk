/**
 * Copyright (c) 2021, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsgardeoAuthGuard, AsgardeoSignInRedirectComponent } from "@asgardeo/auth-angular";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "signin/redirect", component: AsgardeoSignInRedirectComponent },
    { path: "profile", component: ProfileComponent, canActivate: [AsgardeoAuthGuard] },
    { path: "**", redirectTo: "" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
