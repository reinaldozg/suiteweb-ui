
```
├── _assets/                           # application assets
├── _common/                           # common components
|   ├── helpers/                       # handlebars helpers
|   └── styles/                        # application common styles
├── _themes/                           # different theme versions
├── app/                               # app module (dashboard view)
│   ├── _common/                       # app common components
│   |   ├── editor/                    # wysiwyg editor files
│   |   ├── footer/                    # footer files
│   |   ├── header/                    # header files
│   |   ├── modals/                    # common modal dialogs (confirm, image library, etc)
│   |   └── sidebar/                   # sidebar files
│   ├── {different modules}
|   ├── app-layout.hbs                 # app view layout
│   └── app.scss                       # main app view styles
├── auth/                              # auth module (login/signup/recover)
│   ├── {different modules}
│   ├── auth-layout.hbs                # auth view layout
│   └── auth.scss                      # main auth view styles
├── _context.js                        # main handlebars variables
├── _main.scss                         # main styles
├── _variables.scss                    # variables
├── config.js                          # javascript configs
└── main.js                            # main script file

```
