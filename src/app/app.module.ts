import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { AuthService } from './services/auth/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './settings/account/account.component';
import { SecurityComponent } from './settings/security/security.component';
import { OrganizationsComponent } from './settings/organizations/organizations.component';
import { SettingsMenuComponent } from './settings/menu/menu.component';
import { IndexComponent } from './index/index.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CreateOrganizationComponent } from './settings/organizations/create/create.component';
import { OrganizationDetailsComponent } from './organization/details/details.component';
import { PublishersComponent } from './organization/publishers/publishers.component';
import { OrganizationMenuComponent } from './organization/menu/menu.component';
import { CreatePublisherComponent } from './organization/publishers/create/create.component';
import { AuthorsComponent } from './publisher/authors/authors.component';
import { PublisherMenuComponent } from './publisher/menu/menu.component';
import { PublisherDetailsComponent } from './publisher/details/details.component';
import { InviteAuthorComponent } from './publisher/authors/invite/invite.component';
import { UserPublishersComponent } from './settings/publishers/publishers.component';
import { PublisherPublicPageComponent } from './publisher-public-page/publisher-public-page.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { AddCommentFormComponent } from './components/add-comment-form/add-comment-form.component';
import { CommentComponent } from './components/comment-list/comment/comment.component';
import { OrganizationBundlesComponent } from './organization/bundles/bundles.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    HeaderComponent,
    SignupComponent,
    FeedComponent,
    PageNotFoundComponent,
    AccountComponent,
    SecurityComponent,
    OrganizationsComponent,
    SettingsMenuComponent,
    IndexComponent,
    SpinnerComponent,
    CreateOrganizationComponent,
    OrganizationMenuComponent,
    OrganizationDetailsComponent,
    PublishersComponent,
    CreatePublisherComponent,
    AuthorsComponent,
    PublisherMenuComponent,
    PublisherDetailsComponent,
    InviteAuthorComponent,
    UserPublishersComponent,
    PublisherPublicPageComponent,
    ArticleListComponent,
    ArticleComponent,
    CommentListComponent,
    AddCommentFormComponent,
    CommentComponent,
    OrganizationBundlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
    {
      provide: APP_INITIALIZER,
      useFactory: (auth: AuthService) =>
      {
        return (): Promise<any> =>
        {
          return auth.init();
        };
      },
      deps: [ AuthService ],
      multi: true,
    },
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule
{}
