export default {
  editor: {
    label: {
      en: "shadcn Card",
      fr: "Carte shadcn"
    },
    icon: 'fas fa-square',
    bubble: {
      icon: 'fas fa-square'
    },
    deprecated: false
  },
  properties: {
    showHeader: {
      label: {
        en: "Show header",
        fr: "Afficher l'en-tête"
      },
      type: "OnOff",
      defaultValue: true,
      section: "layout"
    },
    title: {
      label: {
        en: "Title",
        fr: "Titre"
      },
      type: "Text",
      defaultValue: "",
      bindable: true,
      translatable: true,
      hidden: content => !content.showHeader,
      section: "content"
    },
    description: {
      label: {
        en: "Description",
        fr: "Description"
      },
      type: "LongText",
      defaultValue: "",
      bindable: true,
      translatable: true,
      hidden: content => !content.showHeader,
      section: "content"
    },
    bodyContent: {
      label: {
        en: "Body content",
        fr: "Contenu du corps"
      },
      type: "RichText",
      defaultValue: "",
      bindable: true,
      translatable: true,
      section: "content"
    },
    showFooter: {
      label: {
        en: "Show footer",
        fr: "Afficher le pied de page"
      },
      type: "OnOff",
      defaultValue: false,
      section: "layout"
    },
    footerContent: {
      label: {
        en: "Footer content",
        fr: "Contenu du pied de page"
      },
      type: "RichText",
      defaultValue: "",
      bindable: true,
      translatable: true,
      hidden: content => !content.showFooter,
      section: "content"
    },
    headerPadding: {
      label: {
        en: "Header padding",
        fr: "Espacement de l'en-tête"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "p-4", label: { en: "Small", fr: "Petit" } },
          { value: "p-6", label: { en: "Medium", fr: "Moyen" } },
          { value: "p-8", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "p-6",
      hidden: content => !content.showHeader,
      section: "spacing"
    },
    contentPadding: {
      label: {
        en: "Content padding",
        fr: "Espacement du contenu"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "p-4 pt-0", label: { en: "Small", fr: "Petit" } },
          { value: "p-6 pt-0", label: { en: "Medium", fr: "Moyen" } },
          { value: "p-8 pt-0", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "p-6 pt-0",
      section: "spacing"
    },
    footerPadding: {
      label: {
        en: "Footer padding",
        fr: "Espacement du pied de page"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "p-4 pt-0", label: { en: "Small", fr: "Petit" } },
          { value: "p-6 pt-0", label: { en: "Medium", fr: "Moyen" } },
          { value: "p-8 pt-0", label: { en: "Large", fr: "Grand" } }
        ]
      },
      defaultValue: "p-6 pt-0",
      hidden: content => !content.showFooter,
      section: "spacing"
    },
    customClasses: {
      label: {
        en: "Custom CSS classes",
        fr: "Classes CSS personnalisées"
      },
      type: "Text",
      bindable: true,
      section: "style"
    }
  },
  sections: {
    layout: {
      label: { en: "Layout", fr: "Disposition" },
      expand: true
    },
    content: {
      label: { en: "Content", fr: "Contenu" },
      expand: true
    },
    spacing: {
      label: { en: "Spacing", fr: "Espacement" },
      expand: false
    },
    style: {
      label: { en: "Style", fr: "Style" },
      expand: false
    }
  }
}; 