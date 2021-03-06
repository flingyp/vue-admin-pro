import Layout from '@/layouts/LayoutIndex.vue'
import IframeIndex from '@/views/plugins/iframe/IframeIndex.vue'
import RouterViewCom from '@/components/RouterViewCom.vue'
import { SysTyping } from '@/typings/Sys'

export const constantRouters: SysTyping.RouteStruct[] = [
  {
    path: '/',
    redirect: '/common/component',
    meta: {
      isShow: false
    }
  },
  {
    path: '/404',
    component: () => import('@/views/common/exceptPage/NotFoundIndex.vue'),
    meta: {
      isShow: false
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    children: [
      {
        path: '',
        name: 'TestIndex',
        component: () => import('@/views/TestIndex.vue'),
        meta: {
          title: '测试页面',
          icon: 'fluent:window-dev-tools-16-regular',
          sort: -98
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/LoginIndex.vue'),
    meta: {
      isShow: false
    }
  },
  {
    path: '/common',
    name: 'Common',
    component: Layout,
    meta: {
      title: '常用页面',
      icon: 'entypo:creative-commons-share'
    },
    children: [
      {
        path: 'component',
        name: 'CommonComponent',
        component: () => import('@/views/common/uiComponents/ComponentIndex.vue'),
        meta: {
          title: '常用组件',
          icon: 'bxs:component'
        }
      },
      {
        path: 'icon',
        name: 'CommonIcon',
        component: () => import('@/views/common/icons/IconIndex.vue'),
        meta: {
          title: '图标示例',
          icon: 'line-md:iconify1'
        }
      },
      {
        path: '404',
        name: 'Common404',
        component: () => import('@/views/common/exceptPage/NotFoundIndex.vue'),
        meta: {
          title: '404页面',
          icon: 'tabler:error-404'
        }
      },
      {
        path: '500',
        name: 'Common500',
        component: () => import('@/views/common/exceptPage/ServerExceptIndex.vue'),
        meta: {
          title: '500页面',
          icon: 'la:500px'
        }
      }
    ]
  },
  {
    path: '/plugin',
    name: 'Plugin',
    component: Layout,
    meta: {
      title: '集成插件',
      icon: 'clarity:plugin-outline-badged'
    },
    children: [
      {
        path: 'diagram',
        name: 'PluginDiagram',
        component: () => import('@/views/plugins/echarts/DiagramIndex.vue'),
        meta: {
          title: 'Echarts图表',
          icon: 'carbon:diagram',
          cache: false
        }
      },
      {
        path: 'map',
        name: 'Map',
        component: RouterViewCom,
        meta: {
          title: '地图',
          icon: 'akar-icons:map',
          cache: false
        },
        children: [
          {
            path: 'gaodeMap',
            name: 'GaoDeMap',
            component: () => import('@/views/plugins/maps/GaoDeMapIndex.vue'),
            meta: {
              title: '高德地图',
              icon: 'carbon:map-center'
            }
          },
          {
            path: 'tencentMap',
            name: 'TencentMap',
            component: () => import('@/views/plugins/maps/TencentMapIndex.vue'),
            meta: {
              title: '腾讯地图',
              icon: 'ep:map-location'
            }
          }
        ]
      },
      {
        path: 'editor',
        name: 'Editor',
        component: RouterViewCom,
        meta: {
          title: '编辑器',
          icon: 'icon-park-outline:editor',
          cache: false
        },
        children: [
          {
            path: 'richText',
            name: 'EditorRichText',
            component: () => import('@/views/plugins/editors/RichTextIndex.vue'),
            meta: {
              title: '富文本编辑器',
              icon: 'arcticons:editor'
            }
          },
          {
            path: 'markdown',
            name: 'EditorMarkdown',
            component: () => import('@/views/plugins/editors/EditorMarkdownIndex.vue'),
            meta: {
              title: 'Markdown编辑器',
              icon: 'bi:markdown'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/multi',
    name: 'Multi',
    component: Layout,
    meta: {
      title: ' 多级菜单',
      icon: 'octicon:multi-select-24'
    },
    children: [
      {
        path: 'first',
        name: 'MultiFirst',
        component: () => import('@/views/common/multiLevelMenu/multiFirst/MultiFirstIndex.vue'),
        meta: {
          title: '一级菜单',
          icon: 'octicon:multi-select-24'
        }
      },
      {
        path: 'two',
        name: 'MultiTwo',
        component: RouterViewCom,
        meta: {
          title: '二级菜单',
          icon: 'octicon:multi-select-24'
        },
        children: [
          {
            path: 'first',
            name: 'MultiTwo_First',
            component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwo_First.vue'),
            meta: {
              title: '子菜单1',
              icon: 'octicon:multi-select-24'
            }
          },
          {
            path: 'two',
            name: 'MultiTwo_Second',
            component: () => import('@/views/common/multiLevelMenu/multiTwo/MultiTwo_Second.vue'),
            meta: {
              title: '子菜单2',
              icon: 'octicon:multi-select-24'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    name: 'Docs',
    component: Layout,
    meta: {
      title: '相关文档',
      icon: 'iconoir:google-docs'
    },
    children: [
      {
        path: 'naive',
        name: 'DocsNaiveUi',
        component: IframeIndex,
        meta: {
          title: 'Naive UI 文档',
          link: 'External_Link',
          url: 'https://www.naiveui.com/zh-CN/os-theme',
          icon: 'simple-icons:docsdotrs'
        }
      },
      {
        path: 'vue',
        name: 'DocsVueNew',
        component: IframeIndex,
        meta: {
          title: 'Vue3 新中文文档',
          link: 'Internal_Link',
          url: 'https://staging-cn.vuejs.org/',
          icon: 'logos:vue'
        }
      },
      {
        path: 'windicss',
        name: 'DocsWindicss',
        component: IframeIndex,
        meta: {
          title: 'WindiCSS 文档',
          link: 'Internal_Link',
          url: 'https://windicss.org/',
          icon: 'simple-icons:windicss'
        }
      },
      {
        path: 'vite',
        name: 'DocsVite',
        component: IframeIndex,
        meta: {
          title: 'Vite 文档',
          link: 'Internal_Link',
          url: 'https://cn.vitejs.dev/',
          icon: 'vscode-icons:file-type-vite'
        }
      },
      {
        path: 'docs',
        name: 'VueAdminProDocs',
        component: IframeIndex,
        meta: {
          title: 'Vue Admin Pro',
          link: 'Internal_Link',
          url: 'http://yyblog.top/vue-admin-pro-docs',
          icon: 'material-symbols:docs-add-on'
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: Layout,
    children: [
      {
        path: '',
        name: 'AboutIndex',
        component: () => import('@/views/about/AboutIndex.vue'),
        meta: {
          title: '关于',
          icon: 'cib:about-me',
          sort: -99
        }
      }
    ]
  }
]

export const redirect404Router: SysTyping.RouteStruct = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  meta: {
    isShow: false
  }
}
