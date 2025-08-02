<template>
  <div :class="cardClasses" @click="handleClick">
    <!-- Header Section -->
    <div v-if="content.showHeader" :class="headerClasses">
      <div v-if="content.title" :class="titleClasses">
        {{ content.title }}
      </div>
      <div v-if="content.description" :class="descriptionClasses">
        {{ content.description }}
      </div>
    </div>
    
    <!-- Content Section -->
    <div :class="contentClasses">
      <div v-if="content.bodyContent" v-html="content.bodyContent"></div>
      
      <!-- Dropzone pour insérer d'autres composants Weweb -->
      <div v-if="isEditor" class="ww-dropzone" data-ww-dropzone="content">
        <!-- Les composants glissés ici seront dans content -->
      </div>
      <template v-else>
        <component
          v-for="(item, index) in content.wwContent"
          :key="index"
          :is="item.wwElement"
          v-bind="item"
        />
      </template>
      
      <slot />
    </div>
    
    <!-- Footer Section -->
    <div v-if="content.showFooter" :class="footerClasses">
      <div v-if="content.footerContent" v-html="content.footerContent"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShadcnCard',
  props: {
    content: { type: Object, required: true },
    wwElementState: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  emits: ['update:content:effect', 'update:content', 'element-event'],
  computed: {
    isEditor() {
      return typeof window !== 'undefined' && window.wwLib && window.wwLib.getFrontDocument
    },
    
    cardClasses() {
      return 'card-base'
    },
    
    headerClasses() {
      return `card-header card-header-${this.content?.headerPadding || 'default'}`
    },
    
    titleClasses() {
      return 'card-title'
    },
    
    descriptionClasses() {
      return 'card-description'
    },
    
    contentClasses() {
      return `card-content card-content-${this.content?.contentPadding || 'default'}`
    },
    
    footerClasses() {
      return `card-footer card-footer-${this.content?.footerPadding || 'default'}`
    }
  },
  
  methods: {
    handleClick(event) {
      this.$emit('element-event', {
        type: 'click',
        domEvent: event,
        value: {
          title: this.content?.title,
          description: this.content?.description,
          content: this.content
        }
      })
  }
}
</script>

<style>
/* SHADCN UI CARD - WeWeb Compatible */

/* Card base styles with direct colors */
div.card-base {
  border-radius: 8px;
  border: 1px solid #e2e8f0 !important;
  background-color: #ffffff !important;
  color: #0f172a !important;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

div.card-base:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
}

/* Header styles with specific selectors */
div.card-base .card-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

div.card-base .card-header-default {
  padding: 24px !important;
}

div.card-base .card-header-sm {
  padding: 16px !important;
}

div.card-base .card-header-lg {
  padding: 32px !important;
}

div.card-base .card-header-none {
  padding: 0 !important;
}

/* Title styles */
div.card-base .card-title {
  font-size: 24px !important;
  font-weight: 600 !important;
  line-height: 1;
  letter-spacing: -0.025em;
  margin: 0;
  color: #0f172a !important;
}

/* Description styles */
div.card-base .card-description {
  font-size: 14px !important;
  color: #64748b !important;
  margin: 0;
  line-height: 1.5;
}

/* Content styles */
div.card-base .card-content {
  flex: 1;
}

div.card-base .card-content-default {
  padding: 24px !important;
  padding-top: 0 !important;
}

div.card-base .card-content-sm {
  padding: 16px !important;
  padding-top: 0 !important;
}

div.card-base .card-content-lg {
  padding: 32px !important;
  padding-top: 0 !important;
}

div.card-base .card-content-none {
  padding: 0 !important;
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