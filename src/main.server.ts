import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideServerRendering } from '@angular/platform-server';

const bootstrap = (context: any) =>
  bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...(config.providers || []),
      provideServerRendering(), // ✅ Only this
    ],
  }, context);

export default bootstrap;
