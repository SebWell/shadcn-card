export default {
    editor: {
        label: 'Shadcn Card',
        icon: 'square',
    },
    triggerEvents: [
        { name: 'click', label: 'On Click', event: { value: '' }, default: true },
    ],
    properties: {
        content: {
            label: 'Card Settings',
            type: 'Object',
            section: 'settings',
            bindable: true,
            defaultValue: {
                showHeader: true,
                title: '',
                description: '',
                bodyContent: '',
                showFooter: false,
                footerContent: '',
                headerPadding: 'default',
                contentPadding: 'default',
                footerPadding: 'default',
                customClasses: ''
            },
            options: {
                item: {
                    showHeader: {
                        label: 'Show Header',
                        type: 'OnOff',
                        section: 'settings',
                        defaultValue: true
                    },
                    title: {
                        label: 'Title',
                        type: 'Text',
                        section: 'settings',
                        bindable: true,
                        hidden: (content) => !content.showHeader,
                        defaultValue: ''
                    },
                    description: {
                        label: 'Description',
                        type: 'LongText',
                        section: 'settings',
                        bindable: true,
                        hidden: (content) => !content.showHeader,
                        defaultValue: ''
                    },
                    bodyContent: {
                        label: 'Body Content',
                        type: 'LongText',
                        section: 'settings',
                        bindable: true,
                        defaultValue: ''
                    },
                    showFooter: {
                        label: 'Show Footer',
                        type: 'OnOff',
                        section: 'settings',
                        defaultValue: false
                    },
                    footerContent: {
                        label: 'Footer Content',
                        type: 'LongText',
                        section: 'settings',
                        bindable: true,
                        hidden: (content) => !content.showFooter,
                        defaultValue: ''
                    },
                    headerPadding: {
                        label: 'Header Padding',
                        type: 'TextSelect',
                        section: 'style',
                        options: {
                            choices: [
                                { value: 'none', label: 'None' },
                                { value: 'sm', label: 'Small' },
                                { value: 'default', label: 'Default' },
                                { value: 'lg', label: 'Large' }
                            ]
                        },
                        defaultValue: 'default'
                    },
                    contentPadding: {
                        label: 'Content Padding',
                        type: 'TextSelect',
                        section: 'style',
                        options: {
                            choices: [
                                { value: 'none', label: 'None' },
                                { value: 'sm', label: 'Small' },
                                { value: 'default', label: 'Default' },
                                { value: 'lg', label: 'Large' },
                                { value: 'full', label: 'Full' }
                            ]
                        },
                        defaultValue: 'default'
                    },
                    customClasses: {
                        label: 'Custom Classes',
                        type: 'Text',
                        section: 'style',
                        bindable: true,
                        defaultValue: ''
                    }
                }
            }
        }
    }
};
