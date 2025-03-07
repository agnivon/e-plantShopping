/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as NavImport } from './routes/_nav'
import { Route as IndexImport } from './routes/index'
import { Route as NavProductsImport } from './routes/_nav/products'
import { Route as NavCartImport } from './routes/_nav/cart'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const NavRoute = NavImport.update({
  id: '/_nav',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NavProductsRoute = NavProductsImport.update({
  id: '/products',
  path: '/products',
  getParentRoute: () => NavRoute,
} as any)

const NavCartRoute = NavCartImport.update({
  id: '/cart',
  path: '/cart',
  getParentRoute: () => NavRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_nav': {
      id: '/_nav'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof NavImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/_nav/cart': {
      id: '/_nav/cart'
      path: '/cart'
      fullPath: '/cart'
      preLoaderRoute: typeof NavCartImport
      parentRoute: typeof NavImport
    }
    '/_nav/products': {
      id: '/_nav/products'
      path: '/products'
      fullPath: '/products'
      preLoaderRoute: typeof NavProductsImport
      parentRoute: typeof NavImport
    }
  }
}

// Create and export the route tree

interface NavRouteChildren {
  NavCartRoute: typeof NavCartRoute
  NavProductsRoute: typeof NavProductsRoute
}

const NavRouteChildren: NavRouteChildren = {
  NavCartRoute: NavCartRoute,
  NavProductsRoute: NavProductsRoute,
}

const NavRouteWithChildren = NavRoute._addFileChildren(NavRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof NavRouteWithChildren
  '/about': typeof AboutRoute
  '/cart': typeof NavCartRoute
  '/products': typeof NavProductsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof NavRouteWithChildren
  '/about': typeof AboutRoute
  '/cart': typeof NavCartRoute
  '/products': typeof NavProductsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_nav': typeof NavRouteWithChildren
  '/about': typeof AboutRoute
  '/_nav/cart': typeof NavCartRoute
  '/_nav/products': typeof NavProductsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/about' | '/cart' | '/products'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/about' | '/cart' | '/products'
  id: '__root__' | '/' | '/_nav' | '/about' | '/_nav/cart' | '/_nav/products'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  NavRoute: typeof NavRouteWithChildren
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  NavRoute: NavRouteWithChildren,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_nav",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_nav": {
      "filePath": "_nav.tsx",
      "children": [
        "/_nav/cart",
        "/_nav/products"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_nav/cart": {
      "filePath": "_nav/cart.tsx",
      "parent": "/_nav"
    },
    "/_nav/products": {
      "filePath": "_nav/products.tsx",
      "parent": "/_nav"
    }
  }
}
ROUTE_MANIFEST_END */
