(self.webpackChunkng_material_ui=self.webpackChunkng_material_ui||[]).push([[338],{"./projects/core-ui/src/lib/components/ui-icon/component/ui-icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>UiIconComponent});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts_css_ngResource_home_nick_workspace_projects_core_ui_ngx_library_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgfQogICAg_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./projects/core-ui/src/lib/components/ui-icon/component/ui-icon.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgfQogICAg!./projects/core-ui/src/lib/components/ui-icon/component/ui-icon.component.ts"),_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts_css_ngResource_home_nick_workspace_projects_core_ui_ngx_library_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgfQogICAg_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts_css_ngResource_home_nick_workspace_projects_core_ui_ngx_library_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgfQogICAg_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts__WEBPACK_IMPORTED_MODULE_4__),_angular_common__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_service_registry_icon_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/core-ui/src/lib/components/ui-icon/service/registry-icon.service.ts");let UiIconComponent=class UiIconComponent{#svgIcon;#element=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);#renderer=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);#iconsRegistry=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_service_registry_icon_service__WEBPACK_IMPORTED_MODULE_1__.v);constructor(document){this.document=document}set name(iconName){this.#svgIcon&&this.#renderer.removeChild(this.#element.nativeElement,this.#svgIcon);const svgData=this.#iconsRegistry.getIcon(iconName);this.#svgIcon=this.#svgElementFromString(svgData,iconName),this.#renderer.appendChild(this.#element.nativeElement,this.#svgIcon)}#svgElementFromString(svgContent,title){const div=this.#renderer.createElement("DIV");return div.innerHTML=svgContent,this.#renderer.removeAttribute(div.querySelector("svg"),"width"),this.#renderer.removeAttribute(div.querySelector("svg"),"height"),this.#renderer.setAttribute(div.querySelector("svg"),"title",title),div.querySelector("svg")||this.document.createElementNS("http://www.w3.org/2000/svg","path")}static#_=this.ctorParameters=()=>[{type:Document,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,args:[_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]}]}];static#_2=this.propDecorators={name:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}]}};UiIconComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"ui-icon",standalone:!0,template:"",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,styles:[_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts_css_ngResource_home_nick_workspace_projects_core_ui_ngx_library_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgfQogICAg_home_nick_workspace_projects_core_ui_ngx_library_projects_core_ui_src_lib_components_ui_icon_component_ui_icon_component_ts__WEBPACK_IMPORTED_MODULE_4___default()]})],UiIconComponent)},"./projects/core-ui/src/lib/components/ui-icon/service/registry-icon.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{v:()=>RegistryIconService});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let RegistryIconService=class RegistryIconService{#registry=new Map;registerIcons(icons){icons.forEach((icon=>this.#registry.set(icon.name,icon.data)))}getIcon(iconName){const icon=this.#registry.get(iconName);if(!icon)throw console.warn(`We could not find the Icon with the name '${iconName}', did you add it to the Icon registry?`),Error("Message: icon not fount");return icon}};RegistryIconService=(0,tslib__WEBPACK_IMPORTED_MODULE_0__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],RegistryIconService)},"./projects/core-ui/src/lib/components/ui-icon/storybook-util/register-icon-service-factory.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>registryIconServiceFactory});const uiIconAdd={name:"add",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z"/></svg>'},uiIconAddGrad={name:"add_grad",data:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M427-428H168v-106h259v-259h106v259h259v106H533v259H427v-259Z"/></svg>'},uiIconArrowRight={name:"arrow_right",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M400-280v-400l200 200-200 200Z"/></svg>'},uiIconClose={name:"close",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>'},uiIconCancel={name:"cancel",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m330-288 150-150 150 150 42-42-150-150 150-150-42-42-150 150-150-150-42 42 150 150-150 150 42 42ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>'},uiIconHome={name:"home",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg>'},uiIconHomeFill={name:"home_fill",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M160-120v-480l320-240 320 240v480H560v-280H400v280H160Z"/></svg>'},uiIconDelete={name:"delete",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/></svg>'},uiIconDeleteFill={name:"delete_fill",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M261-120q-24 0-42-18t-18-42v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm106-146h60v-399h-60v399Zm166 0h60v-399h-60v399Z"/></svg>'},uiIconEdit={name:"edit",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/></svg>'},uiIconEditFill={name:"edit_fill",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M794-666 666-794l42-42q17-17 42.5-16.5T793-835l43 43q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Z"/></svg>'},uiIconFavorite={name:"favorite",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z"/></svg>'},uiIconFavoriteFill={name:"favorite_fill",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="m480-121-41-37q-106-97-175-167.5t-110-126Q113-507 96.5-552T80-643q0-90 60.5-150.5T290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.5T880-643q0 46-16.5 91T806-451.5q-41 55.5-110 126T521-158l-41 37Z"/></svg>'},uiIconHistory={name:"history",data:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12.95 21q-1.7 0-3.313-.637Q8.025 19.725 6.7 18.4L8.1 17q1.025.975 2.3 1.488Q11.675 19 13 19q2.9 0 4.95-2.05Q20 14.9 20 12q0-2.9-2.05-4.95Q15.9 5 13 5q-2.875 0-4.938 2.012Q6 9.025 6 12.2l1.85-1.85 1.4 1.4L5 16 .75 11.75l1.45-1.4L4 12.2q0-1.95.7-3.638.7-1.687 1.925-2.925Q7.85 4.4 9.488 3.7 11.125 3 13 3q1.85 0 3.488.712 1.637.713 2.862 1.938t1.938 2.862Q22 10.15 22 12t-.712 3.488q-.713 1.637-1.938 2.862t-2.875 1.938Q14.825 21 12.95 21Zm2.85-4.8L12 12.4V7h2v4.6l3.2 3.2Z"/></svg>'},uiIconPerson={name:"person",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/></svg>'},uiIconPersonAdd={name:"person_add",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M730-400v-130H600v-60h130v-130h60v130h130v60H790v130h-60Zm-370-81q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM40-160v-94q0-35 17.5-63.5T108-360q75-33 133.338-46.5 58.339-13.5 118.5-13.5Q420-420 478-406.5 536-393 611-360q33 15 51 43t18 63v94H40Zm60-60h520v-34q0-16-9-30.5T587-306q-71-33-120-43.5T360-360q-58 0-107.5 10.5T132-306q-15 7-23.5 21.5T100-254v34Zm260-321q39 0 64.5-25.5T450-631q0-39-25.5-64.5T360-721q-39 0-64.5 25.5T270-631q0 39 25.5 64.5T360-541Zm0-90Zm0 411Z"/></svg>'},uiIconAccountCircle={name:"account_circle",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M222-255q63-44 125-67.5T480-346q71 0 133.5 23.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm.654 370Q398-80 325-111.5q-73-31.5-127.5-86t-86-127.266Q80-397.532 80-480.266T111.5-635.5q31.5-72.5 86-127t127.266-86q72.766-31.5 155.5-31.5T635.5-848.5q72.5 31.5 127 86t86 127.032q31.5 72.532 31.5 155T848.5-325q-31.5 73-86 127.5t-127.032 86q-72.532 31.5-155 31.5ZM480-140q55 0 107.5-16T691-212q-51-36-104-55t-107-19q-54 0-107 19t-104 55q51 40 103.5 56T480-140Zm0-370q34 0 55.5-21.5T557-587q0-34-21.5-55.5T480-664q-34 0-55.5 21.5T403-587q0 34 21.5 55.5T480-510Zm0-77Zm0 374Z"/></svg>'},uiIconSearch={name:"search",data:'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 -960 960 960"><path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"/></svg>'};var uiIcon_more_vert_grad_icon=__webpack_require__("./projects/core-ui/svg-icons/src/build/uiIcon-more_vert_grad.icon.ts");const uiIconShare={name:"share",data:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363.025-.187.075-.337l-7.05-4.1q-.425.375-.95.587Q6.575 15 6 15q-1.25 0-2.125-.875T3 12q0-1.25.875-2.125T6 9q.575 0 1.1.212.525.213.95.588l7.05-4.1q-.05-.15-.075-.337Q15 5.175 15 5q0-1.25.875-2.125T18 2q1.25 0 2.125.875T21 5q0 1.25-.875 2.125T18 8q-.575 0-1.1-.213-.525-.212-.95-.587L8.9 11.3q.05.15.075.337Q9 11.825 9 12t-.025.362q-.025.188-.075.338l7.05 4.1q.425-.375.95-.588Q17.425 16 18 16q1.25 0 2.125.875T21 19q0 1.25-.875 2.125T18 22Zm0-16q.425 0 .712-.287Q19 5.425 19 5t-.288-.713Q18.425 4 18 4t-.712.287Q17 4.575 17 5t.288.713Q17.575 6 18 6ZM6 13q.425 0 .713-.288Q7 12.425 7 12t-.287-.713Q6.425 11 6 11t-.713.287Q5 11.575 5 12t.287.712Q5.575 13 6 13Zm12 7q.425 0 .712-.288Q19 19.425 19 19t-.288-.712Q18.425 18 18 18t-.712.288Q17 18.575 17 19t.288.712Q17.575 20 18 20Zm0-15ZM6 12Zm12 7Z"/></svg>'},uiIconShoppingCart={name:"shopping_cart",data:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM6.15 6l2.4 5h7l2.75-5ZM5.2 4h14.75q.675 0 .925.5t-.025 1.05l-3.55 6.4q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h12v2H7q-1.125 0-1.7-.988-.575-.987-.05-1.962L6.6 11.6 3 4H1V2h3.25Zm3.35 7h7Z"/></svg>'};var registry_icon_service=__webpack_require__("./projects/core-ui/src/lib/components/ui-icon/service/registry-icon.service.ts");const registryIconServiceFactory=()=>{const service=new registry_icon_service.v;return service.registerIcons([uiIconAdd,uiIconAddGrad,uiIconArrowRight,uiIconClose,uiIconCancel,uiIconHome,uiIconHomeFill,uiIconDelete,uiIconDeleteFill,uiIconEdit,uiIconEditFill,uiIconFavorite,uiIconFavoriteFill,uiIconHistory,uiIconPerson,uiIconPersonAdd,uiIconAccountCircle,uiIconSearch,uiIcon_more_vert_grad_icon.t,uiIconShare,uiIconShoppingCart]),service}},"./projects/core-ui/src/lib/components/ui-typescale/component/ui-typescale.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>UiTypescaleComponent});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_ui_typescale_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/core-ui/src/lib/components/ui-typescale/component/ui-typescale.component.css?ngResource"),_ui_typescale_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_ui_typescale_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UiTypescaleComponent=class UiTypescaleComponent{constructor(){this.type="title",this.size="medium",this.text=""}get clazz(){return`typescale--${this.type} typescale--${this.size}`}static#_=this.propDecorators={type:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],text:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],clazz:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class.typescale"]},{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,args:["class"]}]}};UiTypescaleComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Component)({selector:"ui-typescale",standalone:!0,template:" {{ text }} ",changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,styles:[_ui_typescale_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default()]})],UiTypescaleComponent)},"./projects/core-ui/src/lib/directives/ui-ripple.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>UiRippleDirective});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let UiRippleDirective=class UiRippleDirective{#renderer=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2);#elementRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);onClickRipple($event){const element=this.#elementRef.nativeElement,x=$event.clientX-$event.target.offsetLeft,y=$event.clientY-$event.target.offsetTop,ripples=this.#renderer.createElement("span");this.#renderer.setStyle(ripples,"left",`${this.fromLeft?y:x}px`),this.#renderer.setStyle(ripples,"top",`${this.fromLeft?x:y}px`),this.#renderer.setStyle(ripples,"height",`${this.diameter}px`),this.#renderer.setStyle(ripples,"width",`${this.diameter}px`),this.#renderer.addClass(ripples,"u-ripples"),this.#renderer.appendChild(element,ripples),setTimeout((()=>{this.#renderer.removeChild(element,ripples)}),600)}static#_=this.propDecorators={fromLeft:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{transform:_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute}]}],diameter:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,args:[{required:!0}]}],onClickRipple:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,args:["click",["$event"]]}]}};UiRippleDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({selector:"[uiRipple]",standalone:!0})],UiRippleDirective)},"./projects/core-ui/svg-icons/src/build/uiIcon-more_vert_grad.icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>uiIconMoreVertGrad});const uiIconMoreVertGrad={name:"more_vert_grad",data:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960"><path d="M479.841-110Q441-110 413.5-137.659q-27.5-27.66-27.5-66.5Q386-243 413.659-270.5q27.66-27.5 66.5-27.5Q519-298 546.5-270.341q27.5 27.66 27.5 66.5Q574-165 546.341-137.5q-27.66 27.5-66.5 27.5Zm0-276Q441-386 413.5-413.659q-27.5-27.66-27.5-66.5Q386-519 413.659-546.5q27.66-27.5 66.5-27.5Q519-574 546.5-546.341q27.5 27.66 27.5 66.5Q574-441 546.341-413.5q-27.66 27.5-66.5 27.5Zm0-276Q441-662 413.5-689.659q-27.5-27.66-27.5-66.5Q386-795 413.659-822.5q27.66-27.5 66.5-27.5Q519-850 546.5-822.341q27.5 27.66 27.5 66.5Q574-717 546.341-689.5q-27.66 27.5-66.5 27.5Z"/></svg>'}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/core-ui/src/lib/components/ui-icon/component/ui-icon.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAgIDpob3N0IHsKICAgICAgICBkaXNwbGF5OiBibG9jazsKICAgICAgfQogICAg!./projects/core-ui/src/lib/components/ui-icon/component/ui-icon.component.ts":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"\n      :host {\n        display: block;\n      }\n    ",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./projects/core-ui/src/lib/components/ui-typescale/component/ui-typescale.component.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host.typescale {\n  display: block;\n  font-family: var(--m3-font-family);\n  font-weight: 400;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n:host.typescale--display.typescale--large {\n  line-height: 4rem; /* 64px */\n  font-size: 3.5625rem; /* 57px */\n}\n\n:host.typescale--display.typescale--medium {\n  line-height: 3.25rem; /* 52px */\n  font-size: 2.8125rem; /* 45px */\n}\n\n:host.typescale--display.typescale--small {\n  line-height: 2.75rem; /* 44px */\n  font-size: 2.25rem; /* 36px */\n}\n\n:host.typescale--headline.typescale--large {\n  line-height: 2.5rem; /* 40px */\n  font-size: 2rem; /* 32px */\n}\n\n:host.typescale--headline.typescale--medium {\n  line-height: 2.25rem; /* 36px */\n  font-size: 1.75rem; /* 28px */\n}\n\n:host.typescale--headline.typescale--small {\n  line-height: 2rem; /* 32px */\n  font-size: 1.5rem; /* 24px */\n}\n\n:host.typescale--title.typescale--large {\n  line-height: 1.75rem; /* 28px */\n  font-size: 1.375rem; /* 22px */\n}\n\n:host.typescale--title.typescale--medium {\n  line-height: 1.5rem; /* 24px */\n  font-size: 1rem; /* 16px */\n  letter-spacing: 0.009375rem; /* 0.15px */\n  font-weight: 500;\n}\n\n:host.typescale--title.typescale--small {\n  line-height: 1.25rem; /* 20px */\n  font-size: 0.875rem; /* 14px */\n  letter-spacing: 0.00625rem; /* 0.1px */\n  font-weight: 500;\n}\n\n:host.typescale--label.typescale--large {\n  line-height: 1.25rem; /* 20px */\n  font-size: 0.875rem; /* 14px */\n  letter-spacing: 0.00625rem; /* 0.1px */\n  font-weight: 500;\n}\n\n:host.typescale--label.typescale--medium {\n  line-height: 1rem; /* 16px */\n  font-size: 0.75rem; /* 12px */\n  letter-spacing: 0.03125rem; /* 0.5px */\n  font-weight: 500;\n}\n\n:host.typescale--label.typescale--small {\n  line-height: 1rem; /* 16px */\n  font-size: 0.6875rem; /* 11px */\n  letter-spacing: 0.03125rem; /* 0.5px */\n  font-weight: 500;\n}\n\n:host.typescale--body.typescale--large {\n  line-height: 1.5rem; /* 24px */\n  font-size: 1rem; /* 16px */\n  letter-spacing: 0.03125rem; /* 0.5px */\n}\n\n:host.typescale--body.typescale--medium {\n  line-height: 1.25rem; /* 20px */\n  font-size: 0.875rem; /* 14px */\n  letter-spacing: 0.015625rem; /* 0.25px */\n}\n\n:host.typescale--body.typescale--small {\n  line-height: 1rem; /* 16px */\n  font-size: 0.75rem; /* 12 px*/\n  letter-spacing: 0.025rem; /* 0.4px */\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);