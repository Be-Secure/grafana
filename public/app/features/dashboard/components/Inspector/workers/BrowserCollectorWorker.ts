import * as Bowser from 'bowser';

import { BaseWorker } from './BaseWorker';
import { CollectOptions, CollectorItem } from '../types';

export class BrowserCollectorWorker extends BaseWorker {
  canCollect(options: CollectOptions): boolean {
    return true;
  }

  async collect(options: CollectOptions): Promise<CollectorItem> {
    return await this.safelyCollect(options, async () => Bowser.getParser(window.navigator.userAgent).getBrowser());
  }
}
