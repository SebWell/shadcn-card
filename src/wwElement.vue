<template>
  <div :class="cardClasses">
    <!-- Header Section -->
    <div v-if="showHeader" :class="headerClasses">
      <div v-if="title" :class="titleClasses">
        {{ title }}
      </div>
      <div v-if="description" :class="descriptionClasses">
        {{ description }}
      </div>
    </div>
    
    <!-- Content Section -->
    <div :class="contentClasses">
      <div v-if="bodyContent" v-html="bodyContent"></div>
      
      <!-- Dropzone pour insérer d'autres composants Weweb -->
      <div v-if="isEditor" class="ww-dropzone" data-ww-dropzone="content">
        <!-- Les composants glissés ici seront dans content -->
      </div>
      <template v-else>
        <component
          v-for="(item, index) in content"
          :key="index"
          :is="item.wwElement"
          v-bind="item"
        />
      </template>
      
      <slot />
    </div>
    
    <!-- Footer Section -->
    <div v-if="showFooter" :class="footerClasses">
      <div v-if="footerContent" v-html="footerContent"></div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'WewebCard',
  props: {
        // Individual props will be auto-generated based on the component type
        // This is a placeholder that will be manually refined per component
    },
  setup(props) {
    // Détecter si on est en mode éditeur Weweb
    const isEditor = computed(() => {
      return typeof window !== 'undefined' && window.wwLib && window.wwLib.getFrontDocument;
    })

    const cardClasses = computed(() => {
      const classes = ['card-base']
      
      if (props.customClasses) {
        classes.push(props.customClasses)
      }
      
      return classes.join(' ')
    })

    const headerClasses = computed(() => {
      return `card-header card-header-${props.headerPadding || 'default'}`
    })

    const titleClasses = computed(() => {
      return 'card-title'
    })

    const descriptionClasses = computed(() => {
      return 'card-description'
    })

    const contentClasses = computed(() => {
      return `card-content card-content-${props.contentPadding || 'default'}`
    })

    const footerClasses = computed(() => {
      return `card-footer card-footer-${props.footerPadding || 'default'}`
    })

    return {
      isEditor,
      cardClasses,
      headerClasses,
      titleClasses,
      descriptionClasses,
      contentClasses,
      footerClasses
    }
  }
}
</script>

<style scoped>
/* Variables CSS Shadcn/UI */
:root {
  --border: hsl(214.3, 31.8%, 91.4%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(222.2, 84%, 4.9%);
  --muted-foreground: hsl(215.4, 16.3%, 46.9%);
}

/* Card base styles */
.card-base {
  border-radius: 8px;
  border: 1px solid var(--border);
  background-color: var(--card);
  color: var(--card-foreground);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

/* Header styles */
.card-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-header-default {
  padding: 24px;
}

.card-header-sm {
  padding: 16px;
}

.card-header-lg {
  padding: 32px;
}

.card-header-none {
  padding: 0;
}

/* Title styles */
.card-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.025em;
  margin: 0;
}

/* Description styles */
.card-description {
  font-size: 14px;
  color: var(--muted-foreground);
  margin: 0;
  line-height: 1.5;
}

/* Content styles */
.card-content {
  flex: 1;
}

.card-content-default {
  padding: 24px;
  padding-top: 0;
}

.card-content-sm {
  padding: 16px;
  padding-top: 0;
}

.card-content-lg {
  padding: 32px;
  padding-top: 0;
}

.card-content-none {
  padding: 0;
}

.card-content-full {
  padding: 24px;
}

/* Footer styles */
.card-footer {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-footer-default {
  padding: 24px;
  padding-top: 0;
}

.card-footer-sm {
  padding: 16px;
  padding-top: 0;
}

.card-footer-lg {
  padding: 32px;
  padding-top: 0;
}

.card-footer-none {
  padding: 0;
}

.card-footer-full {
  padding: 24px;
}

/* Weweb dropzone styles */
.ww-dropzone {
  min-height: 100px;
  border: 2px dashed var(--border);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--muted-foreground);
  margin: 12px 0;
  position: relative;
}

.ww-dropzone:hover {
  border-color: hsl(214.3, 31.8%, 80%);
  background-color: hsl(214.3, 31.8%, 98%);
}

.ww-dropzone:before {
  content: "Drop components here";
  font-size: 14px;
  pointer-events: none;
}
</style> 