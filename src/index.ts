// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
// Adapted by the AiiDA Lab Team

import { JupyterLab, JupyterLabPlugin } from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for the Jupyter AiiDA Lab Theme.
 */
const plugin: JupyterLabPlugin<void> = {
  id: '@jupyterlab/theme-aiidalab-extension:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterLab, manager: IThemeManager) {
    const style = '@jupyterlab/theme-aiidalab-extension/index.css';

    manager.register({
      name: 'JupyterLab AiiDA Lab Theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
