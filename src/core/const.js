/**
 * Created by Cheney Yang <yangcheng0816@gmail.com> on 16/6/4.
 */
export default {
  NET: {
    END_POINT_RELEASE: 'http://202.202.43.93:8080',
    END_POINT_DEBUG: 'http://localhost:8080',
    API_PATH: '/api/private/v1',
    API: {
      ADMIN_LOGIN: '/admin/login',
      ADMIN_LIST: '/admin/list',
      ADMIN_ADD: '/admin/add',
      ADMIN_INFO: '/admin/info',
      ADMIN_STATUS_UPDATE: '/admin/status-update',
      ADMIN_DELETE: '/admin/delete',
      ADMIN_RESET: '/admin/password-reset',
      ADMIN_PASSWORD_UPDATE: '/admin/password-update',
      ADMIN_PRIVILEGE_UPDATE: '/admin/privilege-update',
      CONFIG_PRICE: '/config/price',
      CONFIG_UPDATE_DEFAULT_PRICE: '/config/price-default-update',
      CONFIG_SAVE_SPECIFIC_PRICE: '/config/price-specific-save',
      CONFIG_BANNER_LIST: '/config/banner-list',
      CONFIG_BANNER_UPDATE: '/config/banner-update',
      DEPARTMENT_LIST: '/department/list',
      DEPARTMENT_TREE_LIST: '/department/tree-list',
      DEPARTMENT_NAME_UPDATE: '/department/name-update',
      DEPARTMENT_ADD: '/department/add',
      DEPARTMENT_REMOVE: '/department/remove',
      INSTITUTION_LIST: '/institution/list',
      INSTITUTION_ADD: '/institution/add',
      INSTITUTION_DETAIL: '/institution/detail',
      INSTITUTION_INFO_UPDATE: '/institution/info-update',
      INSTITUTION_DELETE: '/institution/delete',
      USER_LIST_BY_DEPARTMENT: '/user/list-by-department',
      USER_DETAIL: '/user/detail',
      USER_INFO_UPDATE: '/user/info-update',
      USER_DELETE: '/user/delete',
      USER_ADD: '/user/add',
      USER_AMOUNT: '/user/amount',
      USER_SET_DEPARTMENT: '/user/set-department',
      USER_SEARCH_BY_NAME: '/user/search-by-name',
      NODE_CHILDREN: '/node/children',
      NODE_DETAIL: '/node/detail',
      NODE_INFO_UPDATE: '/node/info-update',
      NODE_TREE_ROOT: '/node/tree-root',
      NODE_ADD: '/node/add',
      NODE_COPY: '/node/copy',
      NODE_REMOVE: '/node/remove',
      NODE_DELETE: '/node/delete',
      METER_NORMAL_LIST: '/meter/normal-list',
      METER_CHECK_LIST: '/meter/check-list',
      METER_CHILDREN: '/meter/children',
      METER_LIST: '/meter/list',
      METER_ADD_NORMAL: '/meter/add-normal',
      METER_ADD_CHECK: '/meter/add-check',
      METER_INFO_UPDATE: '/meter/info-update',
      METER_REMOVE: '/meter/remove',
      METER_REPLACE: '/meter/replace',
      METER_DETAIL: '/meter/detail',
      METER_SET_AS_CHILD: '/meter/set-as-child',
      NODE_OWNER_NODE: '/node-owner/node',
      NODE_OWNER_OWNER: '/node-owner/owner',
      NODE_OWNER_ADD: '/node-owner/add',
      NODE_OWNER_INVALID: '/node-owner/invalid',
      RECORD_INPUT: '/record/input',
      RECORD_TEMP_LIST: '/record/temp-list-by-node',
      RECORD_LAST: '/record/last',
      RECORD_UPDATE: '/record/update',
      RECORD_LIST_PENDING: '/record/list-pending',
      RECORD_LIST_CHECKED: '/record/list-checked',
      RECORD_CHECK: '/record/check',
      RECORD_PENDING_COUNT: '/record/pending-count',
      ARTICLE_LIST: '/article/',
      ARTICLE_LIST_TYPE: '/article/{type}',
      ARTICLE_CONTENT: '/article/{type}/{id}',
      ARTICLE_SAVE: '/article/save',
      ARTICLE_UPDATE: '/article/update',
      ARTICLE_DELETE: '/article/delete',
      PHOTO_COVER_LIST: '/photo/{type}',
      PHOTO_LIST: '/photo/{type}/{cover_id}',
      PHOTO_COVER_DELETE: '/photo/cover-delete',
      PHOTO_PHOTO_DELETE: '/photo/photo-delete',
      PHOTO_PHOTO_ADD: '/photo/photo-add',
      PHOTO_COVER_ADD: '/photo/cover-add',
      PHOTO_COVER_UPDATE: '/photo/cover-update',
      UPLOAD_IMG: '/upload/img',
      UPLOAD_ATTACHMENT: '/upload/attachment',
      INTRODUCTION_LIST: '/org/intro-list',
      INTRODUCTION_UPDATE: '/org/intro-update',
      SUGGESTION_LIST_STATUS: '/suggestion/list-by-status',
      SUGGESTION_REPLY: '/suggestion/reply',
      STAT_NODE: '/stat/node',
      STAT_OWNER: '/stat/owner'
    }
  },

  ERROR: {
    ERROR_NETWORK: -10000,
    ERROR_INVALID: -1,
    ERROR_PARAM_NOT_SET: 1,
    ERROR_EXISTS: 2,
    ERROR_NOT_EXISTS: 3,
    ERROR_LOGIN_FAIL: 4,
    ERROR_WRONG_PASSWORD: 5,
    INVALID_PARAMS: 6,
    NOT_ALLOWED: 7,
    UPLOAD_FAILED: 8,
    METER_INPUT_WARNING: 9
  },

  SYSTEM: {
    LOG_LEVEL_ERROR: 1,
    LOG_LEVEL_WARN: 2,
    LOG_LEVEL_INFO: 3,
    LOG_LEVEL_TRACE: 4,
    LOG_LEVEL_DEBUG: 5
  },

  DATA: {
    KEY_PREFIX: 'cqupt.management.admin.data.',
    KEY_COOKIE: 'cookie',
    KEY_TOKEN: 'token',
    KEY_ADMIN: 'admin',
    KEY_RECORD_TIME: 'record.time'
  },

  TYPE: {
    OWNER_TYPE_USER: 1,
    OWNER_TYPE_INSTITUTION: 2
  }
}
