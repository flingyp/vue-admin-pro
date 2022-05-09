import Layout from '@/layouts/index.vue'
import IframeIndexVue from '@/views/plugins/iframe/IframeIndex.vue'
import RouterViewCom from '@/components/RouterViewCom.vue'
import { CustomRouteRecordRaw } from '@/types/RouteType'

export const constantRouters: CustomRouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/test',
    meta: {
      isShow: false
    }
  },
  {
    path: '/404',
    component: () => import('@/views/common/exceptPage/NotFound.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    children: [
      {
        path: '',
        name: 'TestIndex',
        component: () => import('@/views/test.vue'),
        meta: {
          title: '测试页面',
          icon: 'fluent:window-dev-tools-16-regular'
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
        component: () => import('@/views/common/exceptPage/NotFound.vue'),
        meta: {
          title: '404页面',
          icon: 'tabler:error-404'
        }
      },
      {
        path: '500',
        name: 'Common500',
        component: () => import('@/views/common/exceptPage/ServerExcept.vue'),
        meta: {
          title: '500页面',
          icon: 'la:500px'
        }
      },
      {
        path: 'curd',
        name: 'CURD',
        component: () => import('@/views/common/curd/CurdForm.vue'),
        meta: {
          title: '基础列表页',
          icon: 'fluent:form-new-20-regular'
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
            component: () => import('@/views/plugins/editors/RichText.vue'),
            meta: {
              title: '富文本编辑器',
              icon: 'arcticons:editor'
            }
          },
          {
            path: 'markdown',
            name: 'EditorMarkdown',
            component: () => import('@/views/plugins/editors/EditorMarkdown.vue'),
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
        component: IframeIndexVue,
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
        component: IframeIndexVue,
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
        component: IframeIndexVue,
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
        component: IframeIndexVue,
        meta: {
          title: 'Vite 文档',
          link: 'Internal_Link',
          url: 'https://cn.vitejs.dev/',
          icon: 'vscode-icons:file-type-vite'
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
          icon: 'cib:about-me'
        }
      }
    ]
  }
]

export const redirect404Router: CustomRouteRecordRaw = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  meta: {
    isShow: false
  }
}
