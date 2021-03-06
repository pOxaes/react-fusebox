// https://github.com/fuse-box/fuse-box-ts-react-reflux-seed

/** Only register the plugin once */
let alreadyRegistered = false;

/** Current names of stateful modules */
let statefulModules = [];

const getHMRPlugin = (renderApp, store) => {
    // store hot reload
    const replaceReducer = () => {
        const nextReducer = require('./reducers/articles').default;
        store.replaceReducer(nextReducer);
        renderApp(store);
    };

    return {
        hmrUpdate: ({ type, path, content }) => {
            if (type === 'js') {
                const isModuleNameInPath = (modulePath) =>
                    statefulModules.some(name => modulePath.includes(name));

                /** If a stateful module has changed reload the window */
                if (isModuleNameInPath(path)) {
                    window.location.reload();
                }

                /** Otherwise flush the other modules */
                FuseBox.flush(function (fileName) {
                    return !isModuleNameInPath(fileName);
                });

                /** Patch the module at give path */
                FuseBox.dynamic(path, content);

                /** Re-import / run the mainFile */
                replaceReducer();
                if (FuseBox.mainFile) {
                    FuseBox.import(FuseBox.mainFile);
                }

                /** We don't want the default behavior */
                return true;
            }
        }
    };
};

/*
 * Registers given module names as being stateful
 * @param modulesNames full or partial path to module name
 */
export const setStatefulModules = (renderApp, store, ...moduleNames) => {
    if (!alreadyRegistered) {
        alreadyRegistered = true;
        FuseBox.addPlugin(getHMRPlugin(renderApp, store));
    }
    statefulModules = moduleNames;
};
