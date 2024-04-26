import './polyfills.server.mjs';
import{$ as M3,A as W2,B as x1,C as v,D as d,E as Y,F as v3,G as d3,H as b,I as R,J as p3,K as H3,L as H,M as Q,N as x2,O as b2,P as N2,Q as y2,R as b1,S as N1,U as z3,Z as V3,a as l3,aa as y1,b as f3,c as m3,ca as q2,d as h3,da as C3,e as C1,ea as g3,f as m2,fa as L3,g as _,ga as x3,h as h2,ha as b3,i as U2,ia as N3,j as I,ja as y3,k as D,l as X,m as u2,ma as S3,n as g2,o as L2,p as g1,q as r2,qa as w3,r as G2,s as u3,sa as k3,t as g,ta as j2,u as V,ua as S1,v as n2,w as v2,x as d2,y as L1,z as B}from"./chunk-OW4LBRO6.mjs";import{a as $,b as f2}from"./chunk-VVCT4QZE.mjs";var B3=(()=>{let c=class c{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=n=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}};c.\u0275fac=function(r){return new(r||c)(V(n2),V(r2))},c.\u0275dir=X({type:c});let a=c;return a})(),t6=(()=>{let c=class c extends B3{};c.\u0275fac=(()=>{let e;return function(n){return(e||(e=g1(c)))(n||c)}})(),c.\u0275dir=X({type:c,features:[v2]});let a=c;return a})(),R3=new h2("");var o6={provide:R3,useExisting:C1(()=>Q2),multi:!0};function l6(){let a=y1()?y1().getUserAgent():"";return/android (\d+)/.test(a.toLowerCase())}var f6=new h2(""),Q2=(()=>{let c=class c extends B3{constructor(e,r,n){super(e,r),this._compositionMode=n,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!l6())}writeValue(e){let r=e??"";this.setProperty("value",r)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}};c.\u0275fac=function(r){return new(r||c)(V(n2),V(r2),V(f6,8))},c.\u0275dir=X({type:c,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,n){r&1&&b("input",function(t){return n._handleInput(t.target.value)})("blur",function(){return n.onTouched()})("compositionstart",function(){return n._compositionStart()})("compositionend",function(t){return n._compositionEnd(t.target.value)})},features:[b1([o6]),v2]});let a=c;return a})();var m6=new h2(""),h6=new h2("");function O3(a){return a!=null}function I3(a){return z3(a)?f3(a):a}function U3(a){let c={};return a.forEach(i=>{c=i!=null?$($({},c),i):c}),Object.keys(c).length===0?null:c}function G3(a,c){return c.map(i=>i(a))}function u6(a){return!a.validate}function W3(a){return a.map(c=>u6(c)?c:i=>c.validate(i))}function v6(a){if(!a)return null;let c=a.filter(O3);return c.length==0?null:function(i){return U3(G3(i,c))}}function q3(a){return a!=null?v6(W3(a)):null}function d6(a){if(!a)return null;let c=a.filter(O3);return c.length==0?null:function(i){let e=G3(i,c).map(I3);return h3(e).pipe(m3(U3))}}function j3(a){return a!=null?d6(W3(a)):null}function A3(a,c){return a===null?[c]:Array.isArray(a)?[...a,c]:[a,c]}function p6(a){return a._rawValidators}function H6(a){return a._rawAsyncValidators}function w1(a){return a?Array.isArray(a)?a:[a]:[]}function X2(a,c){return Array.isArray(a)?a.includes(c):a===c}function P3(a,c){let i=w1(c);return w1(a).forEach(r=>{X2(i,r)||i.push(r)}),i}function _3(a,c){return w1(c).filter(i=>!X2(a,i))}var Y2=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(c){this._rawValidators=c||[],this._composedValidatorFn=q3(this._rawValidators)}_setAsyncValidators(c){this._rawAsyncValidators=c||[],this._composedAsyncValidatorFn=j3(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(c){this._onDestroyCallbacks.push(c)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(c=>c()),this._onDestroyCallbacks=[]}reset(c=void 0){this.control&&this.control.reset(c)}hasError(c,i){return this.control?this.control.hasError(c,i):!1}getError(c,i){return this.control?this.control.getError(c,i):null}},k1=class extends Y2{get formDirective(){return null}get path(){return null}},k2=class extends Y2{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},A1=class{constructor(c){this._cd=c}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},z6={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},J8=f2($({},z6),{"[class.ng-submitted]":"isSubmitted"}),$3=(()=>{let c=class c extends A1{constructor(e){super(e)}};c.\u0275fac=function(r){return new(r||c)(V(k2,2))},c.\u0275dir=X({type:c,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,n){r&2&&x1("ng-untouched",n.isUntouched)("ng-touched",n.isTouched)("ng-pristine",n.isPristine)("ng-dirty",n.isDirty)("ng-valid",n.isValid)("ng-invalid",n.isInvalid)("ng-pending",n.isPending)},features:[v2]});let a=c;return a})();var S2="VALID",$2="INVALID",p2="PENDING",w2="DISABLED";function V6(a){return(K2(a)?a.validators:a)||null}function M6(a){return Array.isArray(a)?q3(a):a||null}function C6(a,c){return(K2(c)?c.asyncValidators:a)||null}function g6(a){return Array.isArray(a)?j3(a):a||null}function K2(a){return a!=null&&!Array.isArray(a)&&typeof a=="object"}var P1=class{constructor(c,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(c),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(c){this._rawValidators=this._composedValidatorFn=c}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(c){this._rawAsyncValidators=this._composedAsyncValidatorFn=c}get parent(){return this._parent}get valid(){return this.status===S2}get invalid(){return this.status===$2}get pending(){return this.status==p2}get disabled(){return this.status===w2}get enabled(){return this.status!==w2}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(c){this._assignValidators(c)}setAsyncValidators(c){this._assignAsyncValidators(c)}addValidators(c){this.setValidators(P3(c,this._rawValidators))}addAsyncValidators(c){this.setAsyncValidators(P3(c,this._rawAsyncValidators))}removeValidators(c){this.setValidators(_3(c,this._rawValidators))}removeAsyncValidators(c){this.setAsyncValidators(_3(c,this._rawAsyncValidators))}hasValidator(c){return X2(this._rawValidators,c)}hasAsyncValidator(c){return X2(this._rawAsyncValidators,c)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(c={}){this.touched=!0,this._parent&&!c.onlySelf&&this._parent.markAsTouched(c)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(c=>c.markAllAsTouched())}markAsUntouched(c={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}markAsDirty(c={}){this.pristine=!1,this._parent&&!c.onlySelf&&this._parent.markAsDirty(c)}markAsPristine(c={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}markAsPending(c={}){this.status=p2,c.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!c.onlySelf&&this._parent.markAsPending(c)}disable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=w2,this.errors=null,this._forEachChild(e=>{e.disable(f2($({},c),{onlySelf:!0}))}),this._updateValue(),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f2($({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!0))}enable(c={}){let i=this._parentMarkedDirty(c.onlySelf);this.status=S2,this._forEachChild(e=>{e.enable(f2($({},c),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent}),this._updateAncestors(f2($({},c),{skipPristineCheck:i})),this._onDisabledChange.forEach(e=>e(!1))}_updateAncestors(c){this._parent&&!c.onlySelf&&(this._parent.updateValueAndValidity(c),c.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(c){this._parent=c}getRawValue(){return this.value}updateValueAndValidity(c={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===S2||this.status===p2)&&this._runAsyncValidator(c.emitEvent)),c.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!c.onlySelf&&this._parent.updateValueAndValidity(c)}_updateTreeValidity(c={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(c)),this.updateValueAndValidity({onlySelf:!0,emitEvent:c.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w2:S2}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(c){if(this.asyncValidator){this.status=p2,this._hasOwnPendingAsyncValidator=!0;let i=I3(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:c})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(c,i={}){this.errors=c,this._updateControlsErrors(i.emitEvent!==!1)}get(c){let i=c;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((e,r)=>e&&e._find(r),this)}getError(c,i){let e=i?this.get(i):this;return e&&e.errors?e.errors[c]:null}hasError(c,i){return!!this.getError(c,i)}get root(){let c=this;for(;c._parent;)c=c._parent;return c}_updateControlsErrors(c){this.status=this._calculateStatus(),c&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(c)}_initObservables(){this.valueChanges=new G2,this.statusChanges=new G2}_calculateStatus(){return this._allControlsDisabled()?w2:this.errors?$2:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(p2)?p2:this._anyControlsHaveStatus($2)?$2:S2}_anyControlsHaveStatus(c){return this._anyControls(i=>i.status===c)}_anyControlsDirty(){return this._anyControls(c=>c.dirty)}_anyControlsTouched(){return this._anyControls(c=>c.touched)}_updatePristine(c={}){this.pristine=!this._anyControlsDirty(),this._parent&&!c.onlySelf&&this._parent._updatePristine(c)}_updateTouched(c={}){this.touched=this._anyControlsTouched(),this._parent&&!c.onlySelf&&this._parent._updateTouched(c)}_registerOnCollectionChange(c){this._onCollectionChange=c}_setUpdateStrategy(c){K2(c)&&c.updateOn!=null&&(this._updateOn=c.updateOn)}_parentMarkedDirty(c){let i=this._parent&&this._parent.dirty;return!c&&!!i&&!this._parent._anyControlsDirty()}_find(c){return null}_assignValidators(c){this._rawValidators=Array.isArray(c)?c.slice():c,this._composedValidatorFn=M6(this._rawValidators)}_assignAsyncValidators(c){this._rawAsyncValidators=Array.isArray(c)?c.slice():c,this._composedAsyncValidatorFn=g6(this._rawAsyncValidators)}};var X3=new h2("CallSetDisabledState",{providedIn:"root",factory:()=>_1}),_1="always";function L6(a,c){return[...c.path,a]}function x6(a,c,i=_1){N6(a,c),c.valueAccessor.writeValue(a.value),(a.disabled||i==="always")&&c.valueAccessor.setDisabledState?.(a.disabled),y6(a,c),w6(a,c),S6(a,c),b6(a,c)}function D3(a,c){a.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(c)})}function b6(a,c){if(c.valueAccessor.setDisabledState){let i=e=>{c.valueAccessor.setDisabledState(e)};a.registerOnDisabledChange(i),c._registerOnDestroy(()=>{a._unregisterOnDisabledChange(i)})}}function N6(a,c){let i=p6(a);c.validator!==null?a.setValidators(A3(i,c.validator)):typeof i=="function"&&a.setValidators([i]);let e=H6(a);c.asyncValidator!==null?a.setAsyncValidators(A3(e,c.asyncValidator)):typeof e=="function"&&a.setAsyncValidators([e]);let r=()=>a.updateValueAndValidity();D3(c._rawValidators,r),D3(c._rawAsyncValidators,r)}function y6(a,c){c.valueAccessor.registerOnChange(i=>{a._pendingValue=i,a._pendingChange=!0,a._pendingDirty=!0,a.updateOn==="change"&&Y3(a,c)})}function S6(a,c){c.valueAccessor.registerOnTouched(()=>{a._pendingTouched=!0,a.updateOn==="blur"&&a._pendingChange&&Y3(a,c),a.updateOn!=="submit"&&a.markAsTouched()})}function Y3(a,c){a._pendingDirty&&a.markAsDirty(),a.setValue(a._pendingValue,{emitModelToViewChange:!1}),c.viewToModelUpdate(a._pendingValue),a._pendingChange=!1}function w6(a,c){let i=(e,r)=>{c.valueAccessor.writeValue(e),r&&c.viewToModelUpdate(e)};a.registerOnChange(i),c._registerOnDestroy(()=>{a._unregisterOnChange(i)})}function k6(a,c){if(!a.hasOwnProperty("model"))return!1;let i=a.model;return i.isFirstChange()?!0:!Object.is(c,i.currentValue)}function A6(a){return Object.getPrototypeOf(a.constructor)===t6}function P6(a,c){if(!c)return null;Array.isArray(c);let i,e,r;return c.forEach(n=>{n.constructor===Q2?i=n:A6(n)?e=n:r=n}),r||e||i||null}function F3(a,c){let i=a.indexOf(c);i>-1&&a.splice(i,1)}function T3(a){return typeof a=="object"&&a!==null&&Object.keys(a).length===2&&"value"in a&&"disabled"in a}var _6=class extends P1{constructor(c=null,i,e){super(V6(i),C6(e,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(c),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),K2(i)&&(i.nonNullable||i.initialValueIsDefault)&&(T3(c)?this.defaultValue=c.value:this.defaultValue=c)}setValue(c,i={}){this.value=this._pendingValue=c,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(e=>e(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(c,i={}){this.setValue(c,i)}reset(c=this.defaultValue,i={}){this._applyFormState(c),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(c){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(c){this._onChange.push(c)}_unregisterOnChange(c){F3(this._onChange,c)}registerOnDisabledChange(c){this._onDisabledChange.push(c)}_unregisterOnDisabledChange(c){F3(this._onDisabledChange,c)}_forEachChild(c){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(c){T3(c)?(this.value=this._pendingValue=c.value,c.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=c}};var D6={provide:k2,useExisting:C1(()=>D1)},E3=Promise.resolve(),D1=(()=>{let c=class c extends k2{constructor(e,r,n,s,t,o){super(),this._changeDetectorRef=t,this.callSetDisabledState=o,this.control=new _6,this._registered=!1,this.name="",this.update=new G2,this._parent=e,this._setValidators(r),this._setAsyncValidators(n),this.valueAccessor=P6(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let r=e.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),k6(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){x6(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){E3.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let r=e.isDisabled.currentValue,n=r!==0&&M3(r);E3.then(()=>{n&&!this.control.disabled?this.control.disable():!n&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?L6(e,this._parent):[e]}};c.\u0275fac=function(r){return new(r||c)(V(k1,9),V(m6,10),V(h6,10),V(R3,10),V(V3,8),V(X3,8))},c.\u0275dir=X({type:c,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[U2.None,"disabled","isDisabled"],model:[U2.None,"ngModel","model"],options:[U2.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[b1([D6]),v2,u2]});let a=c;return a})();var F6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=D({type:c}),c.\u0275inj=_({});let a=c;return a})();var Q3=(()=>{let c=class c{static withConfig(e){return{ngModule:c,providers:[{provide:X3,useValue:e.callSetDisabledState??_1}]}}};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=D({type:c}),c.\u0275inj=_({imports:[F6]});let a=c;return a})();var J2={prefix:"fas",iconName:"car-side",icon:[640,512,[128663],"f5e4","M171.3 96H224v96H111.3l30.4-75.9C146.5 104 158.2 96 171.3 96zM272 192V96h81.2c9.7 0 18.9 4.4 25 12l67.2 84H272zm256.2 1L428.2 68c-18.2-22.8-45.8-36-75-36H171.3c-39.3 0-74.6 23.9-89.1 60.3L40.6 196.4C16.8 205.8 0 228.9 0 256V368c0 17.7 14.3 32 32 32H65.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H385.3c7.6 45.4 47.1 80 94.7 80s87.1-34.6 94.7-80H608c17.7 0 32-14.3 32-32V320c0-65.2-48.8-119-111.8-127zM434.7 368a48 48 0 1 1 90.5 32 48 48 0 1 1 -90.5-32zM160 336a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};var Z2=(()=>{let c=class c{constructor(){this.winnersListSource=new l3([]),this.winnersList$=this.winnersListSource.asObservable()}setWinnersList(e){this.winnersListSource.next(e)}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=m2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})();function J3(a,c){var i=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);c&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable})),i.push.apply(i,e)}return i}function m(a){for(var c=1;c<arguments.length;c++){var i=arguments[c]!=null?arguments[c]:{};c%2?J3(Object(i),!0).forEach(function(e){x(a,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(i)):J3(Object(i)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e))})}return a}function m1(a){"@babel/helpers - typeof";return m1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},m1(a)}function E6(a,c){if(!(a instanceof c))throw new TypeError("Cannot call a class as a function")}function Z3(a,c){for(var i=0;i<c.length;i++){var e=c[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function B6(a,c,i){return c&&Z3(a.prototype,c),i&&Z3(a,i),Object.defineProperty(a,"prototype",{writable:!1}),a}function x(a,c,i){return c in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,a}function Q1(a,c){return O6(a)||U6(a,c)||x4(a,c)||W6()}function R2(a){return R6(a)||I6(a)||x4(a)||G6()}function R6(a){if(Array.isArray(a))return R1(a)}function O6(a){if(Array.isArray(a))return a}function I6(a){if(typeof Symbol<"u"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function U6(a,c){var i=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(i!=null){var e=[],r=!0,n=!1,s,t;try{for(i=i.call(a);!(r=(s=i.next()).done)&&(e.push(s.value),!(c&&e.length===c));r=!0);}catch(o){n=!0,t=o}finally{try{!r&&i.return!=null&&i.return()}finally{if(n)throw t}}return e}}function x4(a,c){if(a){if(typeof a=="string")return R1(a,c);var i=Object.prototype.toString.call(a).slice(8,-1);if(i==="Object"&&a.constructor&&(i=a.constructor.name),i==="Map"||i==="Set")return Array.from(a);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return R1(a,c)}}function R1(a,c){(c==null||c>a.length)&&(c=a.length);for(var i=0,e=new Array(c);i<c;i++)e[i]=a[i];return e}function G6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var c4=function(){},K1={},b4={},N4=null,y4={mark:c4,measure:c4};try{typeof window<"u"&&(K1=window),typeof document<"u"&&(b4=document),typeof MutationObserver<"u"&&(N4=MutationObserver),typeof performance<"u"&&(y4=performance)}catch{}var q6=K1.navigator||{},a4=q6.userAgent,e4=a4===void 0?"":a4,Z=K1,C=b4,i4=N4,c1=y4,i5=!!Z.document,q=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",S4=~e4.indexOf("MSIE")||~e4.indexOf("Trident/"),a1,e1,i1,r1,n1,U="___FONT_AWESOME___",O1=16,w4="fa",k4="svg-inline--fa",o2="data-fa-i2svg",I1="data-fa-pseudo-element",j6="data-fa-pseudo-element-pending",J1="data-prefix",Z1="data-icon",r4="fontawesome-i2svg",$6="async",X6=["HTML","HEAD","STYLE","SCRIPT"],A4=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),M="classic",L="sharp",c3=[M,L];function O2(a){return new Proxy(a,{get:function(i,e){return e in i?i[e]:i[M]}})}var D2=O2((a1={},x(a1,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),x(a1,L,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),a1)),F2=O2((e1={},x(e1,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(e1,L,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),e1)),T2=O2((i1={},x(i1,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(i1,L,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),i1)),Y6=O2((r1={},x(r1,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(r1,L,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),r1)),Q6=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,P4="fa-layers-text",K6=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,J6=O2((n1={},x(n1,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(n1,L,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),n1)),_4=[1,2,3,4,5,6,7,8,9,10],Z6=_4.concat([11,12,13,14,15,16,17,18,19,20]),c0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],s2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},E2=new Set;Object.keys(F2[M]).map(E2.add.bind(E2));Object.keys(F2[L]).map(E2.add.bind(E2));var a0=[].concat(c3,R2(E2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",s2.GROUP,s2.SWAP_OPACITY,s2.PRIMARY,s2.SECONDARY]).concat(_4.map(function(a){return"".concat(a,"x")})).concat(Z6.map(function(a){return"w-".concat(a)})),P2=Z.FontAwesomeConfig||{};function e0(a){var c=C.querySelector("script["+a+"]");if(c)return c.getAttribute(a)}function i0(a){return a===""?!0:a==="false"?!1:a==="true"?!0:a}C&&typeof C.querySelector=="function"&&(n4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],n4.forEach(function(a){var c=Q1(a,2),i=c[0],e=c[1],r=i0(e0(i));r!=null&&(P2[e]=r)}));var n4,D4={styleDefault:"solid",familyDefault:"classic",cssPrefix:w4,replacementClass:k4,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};P2.familyPrefix&&(P2.cssPrefix=P2.familyPrefix);var M2=m(m({},D4),P2);M2.autoReplaceSvg||(M2.observeMutations=!1);var u={};Object.keys(D4).forEach(function(a){Object.defineProperty(u,a,{enumerable:!0,set:function(i){M2[a]=i,_2.forEach(function(e){return e(u)})},get:function(){return M2[a]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(c){M2.cssPrefix=c,_2.forEach(function(i){return i(u)})},get:function(){return M2.cssPrefix}});Z.FontAwesomeConfig=u;var _2=[];function r0(a){return _2.push(a),function(){_2.splice(_2.indexOf(a),1)}}var J=O1,O={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function n0(a){if(!(!a||!q)){var c=C.createElement("style");c.setAttribute("type","text/css"),c.innerHTML=a;for(var i=C.head.childNodes,e=null,r=i.length-1;r>-1;r--){var n=i[r],s=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=n)}return C.head.insertBefore(c,e),a}}var s0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function B2(){for(var a=12,c="";a-- >0;)c+=s0[Math.random()*62|0];return c}function C2(a){for(var c=[],i=(a||[]).length>>>0;i--;)c[i]=a[i];return c}function a3(a){return a.classList?C2(a.classList):(a.getAttribute("class")||"").split(" ").filter(function(c){return c})}function F4(a){return"".concat(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t0(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,'="').concat(F4(a[i]),'" ')},"").trim()}function v1(a){return Object.keys(a||{}).reduce(function(c,i){return c+"".concat(i,": ").concat(a[i].trim(),";")},"")}function e3(a){return a.size!==O.size||a.x!==O.x||a.y!==O.y||a.rotate!==O.rotate||a.flipX||a.flipY}function o0(a){var c=a.transform,i=a.containerWidth,e=a.iconWidth,r={transform:"translate(".concat(i/2," 256)")},n="translate(".concat(c.x*32,", ").concat(c.y*32,") "),s="scale(".concat(c.size/16*(c.flipX?-1:1),", ").concat(c.size/16*(c.flipY?-1:1),") "),t="rotate(".concat(c.rotate," 0 0)"),o={transform:"".concat(n," ").concat(s," ").concat(t)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:f}}function l0(a){var c=a.transform,i=a.width,e=i===void 0?O1:i,r=a.height,n=r===void 0?O1:r,s=a.startCentered,t=s===void 0?!1:s,o="";return t&&S4?o+="translate(".concat(c.x/J-e/2,"em, ").concat(c.y/J-n/2,"em) "):t?o+="translate(calc(-50% + ".concat(c.x/J,"em), calc(-50% + ").concat(c.y/J,"em)) "):o+="translate(".concat(c.x/J,"em, ").concat(c.y/J,"em) "),o+="scale(".concat(c.size/J*(c.flipX?-1:1),", ").concat(c.size/J*(c.flipY?-1:1),") "),o+="rotate(".concat(c.rotate,"deg) "),o}var f0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function T4(){var a=w4,c=k4,i=u.cssPrefix,e=u.replacementClass,r=f0;if(i!==a||e!==c){var n=new RegExp("\\.".concat(a,"\\-"),"g"),s=new RegExp("\\--".concat(a,"\\-"),"g"),t=new RegExp("\\.".concat(c),"g");r=r.replace(n,".".concat(i,"-")).replace(s,"--".concat(i,"-")).replace(t,".".concat(e))}return r}var s4=!1;function F1(){u.autoAddCss&&!s4&&(n0(T4()),s4=!0)}var m0={mixout:function(){return{dom:{css:T4,insertCss:F1}}},hooks:function(){return{beforeDOMElementCreation:function(){F1()},beforeI2svg:function(){F1()}}}},G=Z||{};G[U]||(G[U]={});G[U].styles||(G[U].styles={});G[U].hooks||(G[U].hooks={});G[U].shims||(G[U].shims=[]);var F=G[U],E4=[],h0=function a(){C.removeEventListener("DOMContentLoaded",a),h1=1,E4.map(function(c){return c()})},h1=!1;q&&(h1=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),h1||C.addEventListener("DOMContentLoaded",h0));function u0(a){q&&(h1?setTimeout(a,0):E4.push(a))}function I2(a){var c=a.tag,i=a.attributes,e=i===void 0?{}:i,r=a.children,n=r===void 0?[]:r;return typeof a=="string"?F4(a):"<".concat(c," ").concat(t0(e),">").concat(n.map(I2).join(""),"</").concat(c,">")}function t4(a,c,i){if(a&&a[c]&&a[c][i])return{prefix:c,iconName:i,icon:a[c][i]}}var v0=function(c,i){return function(e,r,n,s){return c.call(i,e,r,n,s)}},T1=function(c,i,e,r){var n=Object.keys(c),s=n.length,t=r!==void 0?v0(i,r):i,o,f,l;for(e===void 0?(o=1,l=c[n[0]]):(o=0,l=e);o<s;o++)f=n[o],l=t(l,c[f],f,c);return l};function d0(a){for(var c=[],i=0,e=a.length;i<e;){var r=a.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var n=a.charCodeAt(i++);(n&64512)==56320?c.push(((r&1023)<<10)+(n&1023)+65536):(c.push(r),i--)}else c.push(r)}return c}function U1(a){var c=d0(a);return c.length===1?c[0].toString(16):null}function p0(a,c){var i=a.length,e=a.charCodeAt(c),r;return e>=55296&&e<=56319&&i>c+1&&(r=a.charCodeAt(c+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function o4(a){return Object.keys(a).reduce(function(c,i){var e=a[i],r=!!e.icon;return r?c[e.iconName]=e.icon:c[i]=e,c},{})}function G1(a,c){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,n=o4(c);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(a,o4(c)):F.styles[a]=m(m({},F.styles[a]||{}),n),a==="fas"&&G1("fa",c)}var s1,t1,o1,H2=F.styles,H0=F.shims,z0=(s1={},x(s1,M,Object.values(T2[M])),x(s1,L,Object.values(T2[L])),s1),i3=null,B4={},R4={},O4={},I4={},U4={},V0=(t1={},x(t1,M,Object.keys(D2[M])),x(t1,L,Object.keys(D2[L])),t1);function M0(a){return~a0.indexOf(a)}function C0(a,c){var i=c.split("-"),e=i[0],r=i.slice(1).join("-");return e===a&&r!==""&&!M0(r)?r:null}var G4=function(){var c=function(n){return T1(H2,function(s,t,o){return s[o]=T1(t,n,{}),s},{})};B4=c(function(r,n,s){if(n[3]&&(r[n[3]]=s),n[2]){var t=n[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){r[o.toString(16)]=s})}return r}),R4=c(function(r,n,s){if(r[s]=s,n[2]){var t=n[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){r[o]=s})}return r}),U4=c(function(r,n,s){var t=n[2];return r[s]=s,t.forEach(function(o){r[o]=s}),r});var i="far"in H2||u.autoFetchSvg,e=T1(H0,function(r,n){var s=n[0],t=n[1],o=n[2];return t==="far"&&!i&&(t="fas"),typeof s=="string"&&(r.names[s]={prefix:t,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:t,iconName:o}),r},{names:{},unicodes:{}});O4=e.names,I4=e.unicodes,i3=d1(u.styleDefault,{family:u.familyDefault})};r0(function(a){i3=d1(a.styleDefault,{family:u.familyDefault})});G4();function r3(a,c){return(B4[a]||{})[c]}function g0(a,c){return(R4[a]||{})[c]}function t2(a,c){return(U4[a]||{})[c]}function W4(a){return O4[a]||{prefix:null,iconName:null}}function L0(a){var c=I4[a],i=r3("fas",a);return c||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function c2(){return i3}var n3=function(){return{prefix:null,iconName:null,rest:[]}};function d1(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.family,e=i===void 0?M:i,r=D2[e][a],n=F2[e][a]||F2[e][r],s=a in F.styles?a:null;return n||s||null}var l4=(o1={},x(o1,M,Object.keys(T2[M])),x(o1,L,Object.keys(T2[L])),o1);function p1(a){var c,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,n=(c={},x(c,M,"".concat(u.cssPrefix,"-").concat(M)),x(c,L,"".concat(u.cssPrefix,"-").concat(L)),c),s=null,t=M;(a.includes(n[M])||a.some(function(f){return l4[M].includes(f)}))&&(t=M),(a.includes(n[L])||a.some(function(f){return l4[L].includes(f)}))&&(t=L);var o=a.reduce(function(f,l){var h=C0(u.cssPrefix,l);if(H2[l]?(l=z0[t].includes(l)?Y6[t][l]:l,s=l,f.prefix=l):V0[t].indexOf(l)>-1?(s=l,f.prefix=d1(l,{family:t})):h?f.iconName=h:l!==u.replacementClass&&l!==n[M]&&l!==n[L]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var p=s==="fa"?W4(f.iconName):{},z=t2(f.prefix,f.iconName);p.prefix&&(s=null),f.iconName=p.iconName||z||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!H2.far&&H2.fas&&!u.autoFetchSvg&&(f.prefix="fas")}return f},n3());return(a.includes("fa-brands")||a.includes("fab"))&&(o.prefix="fab"),(a.includes("fa-duotone")||a.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===L&&(H2.fass||u.autoFetchSvg)&&(o.prefix="fass",o.iconName=t2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||s==="fa")&&(o.prefix=c2()||"fas"),o}var x0=function(){function a(){E6(this,a),this.definitions={}}return B6(a,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(t){i.definitions[t]=m(m({},i.definitions[t]||{}),s[t]),G1(t,s[t]);var o=T2[M][t];o&&G1(o,s[t]),G4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(n){var s=r[n],t=s.prefix,o=s.iconName,f=s.icon,l=f[2];i[t]||(i[t]={}),l.length>0&&l.forEach(function(h){typeof h=="string"&&(i[t][h]=f)}),i[t][o]=f}),i}}]),a}(),f4=[],z2={},V2={},b0=Object.keys(V2);function N0(a,c){var i=c.mixoutsTo;return f4=a,z2={},Object.keys(V2).forEach(function(e){b0.indexOf(e)===-1&&delete V2[e]}),f4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(i[s]=r[s]),m1(r[s])==="object"&&Object.keys(r[s]).forEach(function(t){i[s]||(i[s]={}),i[s][t]=r[s][t]})}),e.hooks){var n=e.hooks();Object.keys(n).forEach(function(s){z2[s]||(z2[s]=[]),z2[s].push(n[s])})}e.provides&&e.provides(V2)}),i}function W1(a,c){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var n=z2[a]||[];return n.forEach(function(s){c=s.apply(null,[c].concat(e))}),c}function l2(a){for(var c=arguments.length,i=new Array(c>1?c-1:0),e=1;e<c;e++)i[e-1]=arguments[e];var r=z2[a]||[];r.forEach(function(n){n.apply(null,i)})}function W(){var a=arguments[0],c=Array.prototype.slice.call(arguments,1);return V2[a]?V2[a].apply(null,c):void 0}function q1(a){a.prefix==="fa"&&(a.prefix="fas");var c=a.iconName,i=a.prefix||c2();if(c)return c=t2(i,c)||c,t4(q4.definitions,i,c)||t4(F.styles,i,c)}var q4=new x0,y0=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,l2("noAuto")},S0={i2svg:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return q?(l2("beforeI2svg",c),W("pseudoElements2svg",c),W("i2svg",c)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,u0(function(){k0({autoReplaceSvgRoot:i}),l2("watch",c)})}},w0={icon:function(c){if(c===null)return null;if(m1(c)==="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:t2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){var i=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],e=d1(c[0]);return{prefix:e,iconName:t2(e,i)||i}}if(typeof c=="string"&&(c.indexOf("".concat(u.cssPrefix,"-"))>-1||c.match(Q6))){var r=p1(c.split(" "),{skipLookups:!0});return{prefix:r.prefix||c2(),iconName:t2(r.prefix,r.iconName)||r.iconName}}if(typeof c=="string"){var n=c2();return{prefix:n,iconName:t2(n,c)||c}}}},k={noAuto:y0,config:u,dom:S0,parse:w0,library:q4,findIconDefinition:q1,toHtml:I2},k0=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=c.autoReplaceSvgRoot,e=i===void 0?C:i;(Object.keys(F.styles).length>0||u.autoFetchSvg)&&q&&u.autoReplaceSvg&&k.dom.i2svg({node:e})};function H1(a,c){return Object.defineProperty(a,"abstract",{get:c}),Object.defineProperty(a,"html",{get:function(){return a.abstract.map(function(e){return I2(e)})}}),Object.defineProperty(a,"node",{get:function(){if(q){var e=C.createElement("div");return e.innerHTML=a.html,e.children}}}),a}function A0(a){var c=a.children,i=a.main,e=a.mask,r=a.attributes,n=a.styles,s=a.transform;if(e3(s)&&i.found&&!e.found){var t=i.width,o=i.height,f={x:t/o/2,y:.5};r.style=v1(m(m({},n),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:c}]}function P0(a){var c=a.prefix,i=a.iconName,e=a.children,r=a.attributes,n=a.symbol,s=n===!0?"".concat(c,"-").concat(u.cssPrefix,"-").concat(i):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:s}),children:e}]}]}function s3(a){var c=a.icons,i=c.main,e=c.mask,r=a.prefix,n=a.iconName,s=a.transform,t=a.symbol,o=a.title,f=a.maskId,l=a.titleId,h=a.extra,p=a.watchable,z=p===void 0?!1:p,y=e.found?e:i,A=y.width,P=y.height,T=r==="fak",N=[u.replacementClass,n?"".concat(u.cssPrefix,"-").concat(n):""].filter(function(j){return h.classes.indexOf(j)===-1}).filter(function(j){return j!==""||!!j}).concat(h.classes).join(" "),S={children:[],attributes:m(m({},h.attributes),{},{"data-prefix":r,"data-icon":n,class:N,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(P)})},E=T&&!~h.classes.indexOf("fa-fw")?{width:"".concat(A/P*16*.0625,"em")}:{};z&&(S.attributes[o2]=""),o&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(l||B2())},children:[o]}),delete S.attributes.title);var w=m(m({},S),{},{prefix:r,iconName:n,main:i,mask:e,maskId:f,transform:s,symbol:t,styles:m(m({},E),h.styles)}),e2=e.found&&i.found?W("generateAbstractMask",w)||{children:[],attributes:{}}:W("generateAbstractIcon",w)||{children:[],attributes:{}},i2=e2.children,M1=e2.attributes;return w.children=i2,w.attributes=M1,t?P0(w):A0(w)}function m4(a){var c=a.content,i=a.width,e=a.height,r=a.transform,n=a.title,s=a.extra,t=a.watchable,o=t===void 0?!1:t,f=m(m(m({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")});o&&(f[o2]="");var l=m({},s.styles);e3(r)&&(l.transform=l0({transform:r,startCentered:!0,width:i,height:e}),l["-webkit-transform"]=l.transform);var h=v1(l);h.length>0&&(f.style=h);var p=[];return p.push({tag:"span",attributes:f,children:[c]}),n&&p.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),p}function _0(a){var c=a.content,i=a.title,e=a.extra,r=m(m(m({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),n=v1(e.styles);n.length>0&&(r.style=n);var s=[];return s.push({tag:"span",attributes:r,children:[c]}),i&&s.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),s}var E1=F.styles;function j1(a){var c=a[0],i=a[1],e=a.slice(4),r=Q1(e,1),n=r[0],s=null;return Array.isArray(n)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(s2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(s2.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(s2.PRIMARY),fill:"currentColor",d:n[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:c,height:i,icon:s}}var D0={found:!1,width:512,height:512};function F0(a,c){!A4&&!u.showMissingIcons&&a&&console.error('Icon with name "'.concat(a,'" and prefix "').concat(c,'" is missing.'))}function $1(a,c){var i=c;return c==="fa"&&u.styleDefault!==null&&(c=c2()),new Promise(function(e,r){var n={found:!1,width:512,height:512,icon:W("missingIconAbstract")||{}};if(i==="fa"){var s=W4(a)||{};a=s.iconName||a,c=s.prefix||c}if(a&&c&&E1[c]&&E1[c][a]){var t=E1[c][a];return e(j1(t))}F0(a,c),e(m(m({},D0),{},{icon:u.showMissingIcons&&a?W("missingIconAbstract")||{}:{}}))})}var h4=function(){},X1=u.measurePerformance&&c1&&c1.mark&&c1.measure?c1:{mark:h4,measure:h4},A2='FA "6.5.2"',T0=function(c){return X1.mark("".concat(A2," ").concat(c," begins")),function(){return j4(c)}},j4=function(c){X1.mark("".concat(A2," ").concat(c," ends")),X1.measure("".concat(A2," ").concat(c),"".concat(A2," ").concat(c," begins"),"".concat(A2," ").concat(c," ends"))},t3={begin:T0,end:j4},l1=function(){};function u4(a){var c=a.getAttribute?a.getAttribute(o2):null;return typeof c=="string"}function E0(a){var c=a.getAttribute?a.getAttribute(J1):null,i=a.getAttribute?a.getAttribute(Z1):null;return c&&i}function B0(a){return a&&a.classList&&a.classList.contains&&a.classList.contains(u.replacementClass)}function R0(){if(u.autoReplaceSvg===!0)return f1.replace;var a=f1[u.autoReplaceSvg];return a||f1.replace}function O0(a){return C.createElementNS("http://www.w3.org/2000/svg",a)}function I0(a){return C.createElement(a)}function $4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=c.ceFn,e=i===void 0?a.tag==="svg"?O0:I0:i;if(typeof a=="string")return C.createTextNode(a);var r=e(a.tag);Object.keys(a.attributes||[]).forEach(function(s){r.setAttribute(s,a.attributes[s])});var n=a.children||[];return n.forEach(function(s){r.appendChild($4(s,{ceFn:e}))}),r}function U0(a){var c=" ".concat(a.outerHTML," ");return c="".concat(c,"Font Awesome fontawesome.com "),c}var f1={replace:function(c){var i=c[0];if(i.parentNode)if(c[1].forEach(function(r){i.parentNode.insertBefore($4(r),i)}),i.getAttribute(o2)===null&&u.keepOriginalSource){var e=C.createComment(U0(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(c){var i=c[0],e=c[1];if(~a3(i).indexOf(u.replacementClass))return f1.replace(c);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var n=e[0].attributes.class.split(" ").reduce(function(t,o){return o===u.replacementClass||o.match(r)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});e[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",n.toNode.join(" "))}var s=e.map(function(t){return I2(t)}).join(`
`);i.setAttribute(o2,""),i.innerHTML=s}};function v4(a){a()}function X4(a,c){var i=typeof c=="function"?c:l1;if(a.length===0)i();else{var e=v4;u.mutateApproach===$6&&(e=Z.requestAnimationFrame||v4),e(function(){var r=R0(),n=t3.begin("mutate");a.map(r),n(),i()})}}var o3=!1;function Y4(){o3=!0}function Y1(){o3=!1}var u1=null;function d4(a){if(i4&&u.observeMutations){var c=a.treeCallback,i=c===void 0?l1:c,e=a.nodeCallback,r=e===void 0?l1:e,n=a.pseudoElementsCallback,s=n===void 0?l1:n,t=a.observeMutationsRoot,o=t===void 0?C:t;u1=new i4(function(f){if(!o3){var l=c2();C2(f).forEach(function(h){if(h.type==="childList"&&h.addedNodes.length>0&&!u4(h.addedNodes[0])&&(u.searchPseudoElements&&s(h.target),i(h.target)),h.type==="attributes"&&h.target.parentNode&&u.searchPseudoElements&&s(h.target.parentNode),h.type==="attributes"&&u4(h.target)&&~c0.indexOf(h.attributeName))if(h.attributeName==="class"&&E0(h.target)){var p=p1(a3(h.target)),z=p.prefix,y=p.iconName;h.target.setAttribute(J1,z||l),y&&h.target.setAttribute(Z1,y)}else B0(h.target)&&r(h.target)})}}),q&&u1.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function G0(){u1&&u1.disconnect()}function W0(a){var c=a.getAttribute("style"),i=[];return c&&(i=c.split(";").reduce(function(e,r){var n=r.split(":"),s=n[0],t=n.slice(1);return s&&t.length>0&&(e[s]=t.join(":").trim()),e},{})),i}function q0(a){var c=a.getAttribute("data-prefix"),i=a.getAttribute("data-icon"),e=a.innerText!==void 0?a.innerText.trim():"",r=p1(a3(a));return r.prefix||(r.prefix=c2()),c&&i&&(r.prefix=c,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=g0(r.prefix,a.innerText)||r3(r.prefix,U1(a.innerText))),!r.iconName&&u.autoFetchSvg&&a.firstChild&&a.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=a.firstChild.data)),r}function j0(a){var c=C2(a.attributes).reduce(function(r,n){return r.name!=="class"&&r.name!=="style"&&(r[n.name]=n.value),r},{}),i=a.getAttribute("title"),e=a.getAttribute("data-fa-title-id");return u.autoA11y&&(i?c["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(e||B2()):(c["aria-hidden"]="true",c.focusable="false")),c}function $0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:O,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function p4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=q0(a),e=i.iconName,r=i.prefix,n=i.rest,s=j0(a),t=W1("parseNodeAttributes",{},a),o=c.styleParser?W0(a):[];return m({iconName:e,title:a.getAttribute("title"),titleId:a.getAttribute("data-fa-title-id"),prefix:r,transform:O,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:n,styles:o,attributes:s}},t)}var X0=F.styles;function Q4(a){var c=u.autoReplaceSvg==="nest"?p4(a,{styleParser:!1}):p4(a);return~c.extra.classes.indexOf(P4)?W("generateLayersText",a,c):W("generateSvgReplacementMutation",a,c)}var a2=new Set;c3.map(function(a){a2.add("fa-".concat(a))});Object.keys(D2[M]).map(a2.add.bind(a2));Object.keys(D2[L]).map(a2.add.bind(a2));a2=R2(a2);function H4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!q)return Promise.resolve();var i=C.documentElement.classList,e=function(h){return i.add("".concat(r4,"-").concat(h))},r=function(h){return i.remove("".concat(r4,"-").concat(h))},n=u.autoFetchSvg?a2:c3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(X0));n.includes("fa")||n.push("fa");var s=[".".concat(P4,":not([").concat(o2,"])")].concat(n.map(function(l){return".".concat(l,":not([").concat(o2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var t=[];try{t=C2(a.querySelectorAll(s))}catch{}if(t.length>0)e("pending"),r("complete");else return Promise.resolve();var o=t3.begin("onTree"),f=t.reduce(function(l,h){try{var p=Q4(h);p&&l.push(p)}catch(z){A4||z.name==="MissingIcon"&&console.error(z)}return l},[]);return new Promise(function(l,h){Promise.all(f).then(function(p){X4(p,function(){e("active"),e("complete"),r("pending"),typeof c=="function"&&c(),o(),l()})}).catch(function(p){o(),h(p)})})}function Y0(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Q4(a).then(function(i){i&&X4([i],c)})}function Q0(a){return function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(c||{}).icon?c:q1(c||{}),r=i.mask;return r&&(r=(r||{}).icon?r:q1(r||{})),a(e,m(m({},i),{},{mask:r}))}}var K0=function(c){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?O:e,n=i.symbol,s=n===void 0?!1:n,t=i.mask,o=t===void 0?null:t,f=i.maskId,l=f===void 0?null:f,h=i.title,p=h===void 0?null:h,z=i.titleId,y=z===void 0?null:z,A=i.classes,P=A===void 0?[]:A,T=i.attributes,N=T===void 0?{}:T,S=i.styles,E=S===void 0?{}:S;if(c){var w=c.prefix,e2=c.iconName,i2=c.icon;return H1(m({type:"icon"},c),function(){return l2("beforeDOMElementCreation",{iconDefinition:c,params:i}),u.autoA11y&&(p?N["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(y||B2()):(N["aria-hidden"]="true",N.focusable="false")),s3({icons:{main:j1(i2),mask:o?j1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:w,iconName:e2,transform:m(m({},O),r),symbol:s,title:p,maskId:l,titleId:y,extra:{attributes:N,styles:E,classes:P}})})}},J0={mixout:function(){return{icon:Q0(K0)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=H4,i.nodeCallback=Y0,i}}},provides:function(c){c.i2svg=function(i){var e=i.node,r=e===void 0?C:e,n=i.callback,s=n===void 0?function(){}:n;return H4(r,s)},c.generateSvgReplacementMutation=function(i,e){var r=e.iconName,n=e.title,s=e.titleId,t=e.prefix,o=e.transform,f=e.symbol,l=e.mask,h=e.maskId,p=e.extra;return new Promise(function(z,y){Promise.all([$1(r,t),l.iconName?$1(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var P=Q1(A,2),T=P[0],N=P[1];z([i,s3({icons:{main:T,mask:N},prefix:t,iconName:r,transform:o,symbol:f,maskId:h,title:n,titleId:s,extra:p,watchable:!0})])}).catch(y)})},c.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.transform,t=i.styles,o=v1(t);o.length>0&&(r.style=o);var f;return e3(s)&&(f=W("generateAbstractTransformGrouping",{main:n,transform:s,containerWidth:n.width,iconWidth:n.width})),e.push(f||n.icon),{children:e,attributes:r}}}},Z0={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,n=r===void 0?[]:r;return H1({type:"layer"},function(){l2("beforeDOMElementCreation",{assembler:i,params:e});var s=[];return i(function(t){Array.isArray(t)?t.map(function(o){s=s.concat(o.abstract)}):s=s.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(R2(n)).join(" ")},children:s}]})}}}},c8={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,n=r===void 0?null:r,s=e.classes,t=s===void 0?[]:s,o=e.attributes,f=o===void 0?{}:o,l=e.styles,h=l===void 0?{}:l;return H1({type:"counter",content:i},function(){return l2("beforeDOMElementCreation",{content:i,params:e}),_0({content:i.toString(),title:n,extra:{attributes:f,styles:h,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(R2(t))}})})}}}},a8={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?O:r,s=e.title,t=s===void 0?null:s,o=e.classes,f=o===void 0?[]:o,l=e.attributes,h=l===void 0?{}:l,p=e.styles,z=p===void 0?{}:p;return H1({type:"text",content:i},function(){return l2("beforeDOMElementCreation",{content:i,params:e}),m4({content:i,transform:m(m({},O),n),title:t,extra:{attributes:h,styles:z,classes:["".concat(u.cssPrefix,"-layers-text")].concat(R2(f))}})})}}},provides:function(c){c.generateLayersText=function(i,e){var r=e.title,n=e.transform,s=e.extra,t=null,o=null;if(S4){var f=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();t=l.width/f,o=l.height/f}return u.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([i,m4({content:i.innerHTML,width:t,height:o,transform:n,title:r,extra:s,watchable:!0})])}}},e8=new RegExp('"',"ug"),z4=[1105920,1112319];function i8(a){var c=a.replace(e8,""),i=p0(c,0),e=i>=z4[0]&&i<=z4[1],r=c.length===2?c[0]===c[1]:!1;return{value:U1(r?c[0]:c),isSecondary:e||r}}function V4(a,c){var i="".concat(j6).concat(c.replace(":","-"));return new Promise(function(e,r){if(a.getAttribute(i)!==null)return e();var n=C2(a.children),s=n.filter(function(i2){return i2.getAttribute(I1)===c})[0],t=Z.getComputedStyle(a,c),o=t.getPropertyValue("font-family").match(K6),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(s&&!o)return a.removeChild(s),e();if(o&&l!=="none"&&l!==""){var h=t.getPropertyValue("content"),p=~["Sharp"].indexOf(o[2])?L:M,z=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?F2[p][o[2].toLowerCase()]:J6[p][f],y=i8(h),A=y.value,P=y.isSecondary,T=o[0].startsWith("FontAwesome"),N=r3(z,A),S=N;if(T){var E=L0(A);E.iconName&&E.prefix&&(N=E.iconName,z=E.prefix)}if(N&&!P&&(!s||s.getAttribute(J1)!==z||s.getAttribute(Z1)!==S)){a.setAttribute(i,S),s&&a.removeChild(s);var w=$0(),e2=w.extra;e2.attributes[I1]=c,$1(N,z).then(function(i2){var M1=s3(m(m({},w),{},{icons:{main:i2,mask:n3()},prefix:z,iconName:S,extra:e2,watchable:!0})),j=C.createElementNS("http://www.w3.org/2000/svg","svg");c==="::before"?a.insertBefore(j,a.firstChild):a.appendChild(j),j.outerHTML=M1.map(function(s6){return I2(s6)}).join(`
`),a.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function r8(a){return Promise.all([V4(a,"::before"),V4(a,"::after")])}function n8(a){return a.parentNode!==document.head&&!~X6.indexOf(a.tagName.toUpperCase())&&!a.getAttribute(I1)&&(!a.parentNode||a.parentNode.tagName!=="svg")}function M4(a){if(q)return new Promise(function(c,i){var e=C2(a.querySelectorAll("*")).filter(n8).map(r8),r=t3.begin("searchPseudoElements");Y4(),Promise.all(e).then(function(){r(),Y1(),c()}).catch(function(){r(),Y1(),i()})})}var s8={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=M4,i}}},provides:function(c){c.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?C:e;u.searchPseudoElements&&M4(r)}}},C4=!1,t8={mixout:function(){return{dom:{unwatch:function(){Y4(),C4=!0}}}},hooks:function(){return{bootstrap:function(){d4(W1("mutationObserverCallbacks",{}))},noAuto:function(){G0()},watch:function(i){var e=i.observeMutationsRoot;C4?Y1():d4(W1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},g4=function(c){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce(function(e,r){var n=r.toLowerCase().split("-"),s=n[0],t=n.slice(1).join("-");if(s&&t==="h")return e.flipX=!0,e;if(s&&t==="v")return e.flipY=!0,e;if(t=parseFloat(t),isNaN(t))return e;switch(s){case"grow":e.size=e.size+t;break;case"shrink":e.size=e.size-t;break;case"left":e.x=e.x-t;break;case"right":e.x=e.x+t;break;case"up":e.y=e.y-t;break;case"down":e.y=e.y+t;break;case"rotate":e.rotate=e.rotate+t;break}return e},i)},o8={mixout:function(){return{parse:{transform:function(i){return g4(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=g4(r)),i}}},provides:function(c){c.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,n=i.containerWidth,s=i.iconWidth,t={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),h={transform:"".concat(o," ").concat(f," ").concat(l)},p={transform:"translate(".concat(s/2*-1," -256)")},z={outer:t,inner:h,path:p};return{tag:"g",attributes:m({},z.outer),children:[{tag:"g",attributes:m({},z.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:m(m({},e.icon.attributes),z.path)}]}]}}}},B1={x:0,y:0,width:"100%",height:"100%"};function L4(a){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return a.attributes&&(a.attributes.fill||c)&&(a.attributes.fill="black"),a}function l8(a){return a.tag==="g"?a.children:[a]}var f8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),n=r?p1(r.split(" ").map(function(s){return s.trim()})):n3();return n.prefix||(n.prefix=c2()),i.mask=n,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(c){c.generateAbstractMask=function(i){var e=i.children,r=i.attributes,n=i.main,s=i.mask,t=i.maskId,o=i.transform,f=n.width,l=n.icon,h=s.width,p=s.icon,z=o0({transform:o,containerWidth:h,iconWidth:f}),y={tag:"rect",attributes:m(m({},B1),{},{fill:"white"})},A=l.children?{children:l.children.map(L4)}:{},P={tag:"g",attributes:m({},z.inner),children:[L4(m({tag:l.tag,attributes:m(m({},l.attributes),z.path)},A))]},T={tag:"g",attributes:m({},z.outer),children:[P]},N="mask-".concat(t||B2()),S="clip-".concat(t||B2()),E={tag:"mask",attributes:m(m({},B1),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,T]},w={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:l8(p)},E]};return e.push(w,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(N,")")},B1)}),{children:e,attributes:r}}}},m8={provides:function(c){var i=!1;Z.matchMedia&&(i=Z.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},n={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=m(m({},n),{},{attributeName:"opacity"}),t={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||t.children.push({tag:"animate",attributes:m(m({},n),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(t),e.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:m(m({},s),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},h8={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),n=r===null?!1:r===""?!0:r;return i.symbol=n,i}}}},u8=[m0,J0,Z0,c8,a8,s8,t8,o8,f8,m8,h8];N0(u8,{mixoutsTo:k});var r5=k.noAuto,n5=k.config,s5=k.library,t5=k.dom,K4=k.parse,o5=k.findIconDefinition,l5=k.toHtml,J4=k.icon,f5=k.layer,v8=k.text,d8=k.counter;var p8=["*"],H8=a=>{throw new Error(`Could not find icon with iconName=${a.iconName} and prefix=${a.prefix} in the icon library.`)},z8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},V8=a=>{let c={[`fa-${a.animation}`]:a.animation!=null&&!a.animation.startsWith("spin"),"fa-spin":a.animation==="spin"||a.animation==="spin-reverse","fa-spin-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-spin-reverse":a.animation==="spin-reverse"||a.animation==="spin-pulse-reverse","fa-pulse":a.animation==="spin-pulse"||a.animation==="spin-pulse-reverse","fa-fw":a.fixedWidth,"fa-border":a.border,"fa-inverse":a.inverse,"fa-layers-counter":a.counter,"fa-flip-horizontal":a.flip==="horizontal"||a.flip==="both","fa-flip-vertical":a.flip==="vertical"||a.flip==="both",[`fa-${a.size}`]:a.size!==null,[`fa-rotate-${a.rotate}`]:a.rotate!==null,[`fa-pull-${a.pull}`]:a.pull!==null,[`fa-stack-${a.stackItemSize}`]:a.stackItemSize!=null};return Object.keys(c).map(i=>c[i]?i:null).filter(i=>i)},M8=a=>a.prefix!==void 0&&a.iconName!==void 0,C8=(a,c)=>M8(a)?a:typeof a=="string"?{prefix:c,iconName:a}:{prefix:a[0],iconName:a[1]},g8=(()=>{let c=class c{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=m2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),L8=(()=>{let c=class c{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let n of r.icon[2])typeof n=="string"&&(this.definitions[r.prefix][n]=r)}}addIconPacks(...e){for(let r of e){let n=Object.keys(r).map(s=>r[s]);this.addIcons(...n)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};c.\u0275fac=function(r){return new(r||c)},c.\u0275prov=m2({token:c,factory:c.\u0275fac,providedIn:"root"});let a=c;return a})(),x8=(()=>{let c=class c{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};c.\u0275fac=function(r){return new(r||c)},c.\u0275dir=X({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[u2]});let a=c;return a})(),b8=(()=>{let c=class c{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};c.\u0275fac=function(r){return new(r||c)(V(n2),V(r2))},c.\u0275cmp=I({type:c,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[u2,N1],ngContentSelectors:p8,decls:1,vars:0,template:function(r,n){r&1&&(p3(),H3(0))},encapsulation:2});let a=c;return a})(),z1=(()=>{let c=class c{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,n,s,t){this.sanitizer=e,this.config=r,this.iconLibrary=n,this.stackItem=s,this.classes=[],t!=null&&s==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){z8();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(r);if(n!=null){let s=this.buildParams();this.renderIcon(n,s)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=C8(e,this.config.defaultPrefix);if("icon"in r)return r;let n=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return n??(H8(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?K4.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[...V8(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let n=J4(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};c.\u0275fac=function(r){return new(r||c)(V(N3),V(g8),V(L8),V(x8,8),V(b8,8))},c.\u0275cmp=I({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,n){r&2&&(d3("innerHTML",n.renderedIconHTML,u3),L1("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[u2,N1],decls:0,vars:0,template:function(r,n){},encapsulation:2});let a=c;return a})();var Z4=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=D({type:c}),c.\u0275inj=_({});let a=c;return a})();function y8(a,c){if(a&1){let i=v3();v(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"div",25)(5,"button",9),b("click",function(){let r=g2(i).index,n=R(2);return L2(n.editCar(r))}),H(6,"Select"),d(),v(7,"button",9),b("click",function(){let r=g2(i).index,n=R(2);return L2(n.removeCar(r))}),H(8,"Remove"),d()(),v(9,"div",25)(10,"button",26),b("click",function(){let r=g2(i).index,n=R(2);return L2(n.startMoving(r))}),H(11,"Start"),d(),v(12,"button",26),b("click",function(){let r=g2(i).index,n=R(2);return L2(n.stopMoving(r))}),H(13,"Stop"),d()()(),Y(14,"fa-icon",27),v(15,"div")(16,"h5",28),H(17),d()()()()()}if(a&2){let i=c.$implicit,e=c.index,r=R(2);g(10),B("disabled",r.isCarMoving(e)),g(2),B("disabled",!r.isCarMoving(e)),g(2),W2("color",i.color),B("icon",r.faCarSide),g(3),Q(i.name)}}function S8(a,c){if(a&1&&(v(0,"div",19),d2(1,y8,18,6,"div",20),d()),a&2){let i=R();g(),B("ngForOf",i.getCurrentPageBrands())}}function w8(a,c){if(a&1&&(v(0,"div",29)(1,"h2"),H(2,"WINNER:"),d(),v(3,"h3"),H(4),d(),v(5,"p"),H(6),d()()),a&2){let i=R();g(4),Q(i.winnerName),g(2),x2("",i.getWinnerTime()," seconds")}}var e6=(()=>{let c=class c{constructor(e,r,n,s,t){this.http=e,this.raceResultService=r,this.router=n,this.renderer=s,this.el=t,this.faCarSide=J2,this.brands=[],this.currentPage=1,this.pageSize=7,this.loading=!1,this.newBrandName="",this.newBrandColor="#000000",this.updatedBrandName="",this.updatedBrandColor="#000000",this.selectedCarIndex=null,this.moving=!1,this.finishTimes=[],this.startTime=0,this.winnerName=null,this.winnersList=[],this.moveIntervals=[],this.raceFinished=!1,this.currentPositions=[]}navigateToWinnersPage(){this.router.navigate(["/winners"])}ngOnInit(){this.generateBrands()}generateBrands(){let e="https://rentcar.stepprojects.ge/api/Car";this.loading=!0,this.http.get(e).subscribe(r=>{this.brands=r.map(n=>({name:n.brand,color:"#"+Math.floor(Math.random()*16777215).toString(16)})),this.loading=!1,this.winnerName=null})}getCurrentPageBrands(){let e=(this.currentPage-1)*this.pageSize,r=Math.min(e+this.pageSize,this.brands.length);return this.brands.slice(e,r)}get totalPages(){return Math.ceil(this.brands.length/this.pageSize)}prevPage(){this.currentPage>1&&(this.currentPage--,console.log("Previous page:",this.currentPage))}nextPage(){let e=Math.ceil(this.brands.length/this.pageSize);this.currentPage<e&&(this.currentPage++,console.log("Next page:",this.currentPage))}createCar(){let e={name:this.newBrandName,color:this.newBrandColor};this.brands.push(e),this.newBrandName="",this.newBrandColor="#000000"}editCar(e){this.selectedCarIndex=e,this.updatedBrandName=this.brands[e].name,this.updatedBrandColor=this.brands[e].color}updateCar(){this.selectedCarIndex!==null&&(this.brands[this.selectedCarIndex].name=this.updatedBrandName,this.brands[this.selectedCarIndex].color=this.updatedBrandColor,this.selectedCarIndex=null,this.updatedBrandName="",this.updatedBrandColor="#000000")}removeCar(e){this.brands.splice(e,1),this.selectedCarIndex=null}isCarMoving(e){let r=document.querySelector(".card:nth-child("+(e+1)+") fa-icon");return r?r.classList.contains("car-move"):!1}startMoving(e){let r=document.querySelector(".card:nth-child("+(e+1)+") fa-icon");if(r&&!this.isCarMoving(e)){r.classList.add("car-move");let n=this.currentPositions[e]||0;this.moveCar(e,n)}}stopMoving(e){let r=document.querySelector(".card:nth-child("+(e+1)+") fa-icon");if(r&&this.isCarMoving(e)){clearInterval(this.moveIntervals[e]),r.classList.remove("car-move");let n=this.getCurrentPosition(r),s=n>=800,t=n>=(window.innerWidth<=500?280:880);if(s||t){let o=this.brands[e].name;if(!this.finishTimes.some(l=>l.carName===o)){let l=(Date.now()-this.startTime)/1e3;this.finishTimes.push({carName:o,time:l}),this.winnerName||(this.winnerName=o,this.finishTimes.length===this.brands.length&&(this.raceFinished=!0));let h={carNumber:e+1,carName:o,timeTaken:l,place:this.winnersList.length+1,carColor:this.brands[e].color};this.winnersList.push(h)}}}}getWinnerTime(){let e=this.finishTimes.find(r=>r.carName===this.winnerName);if(e){let r=e.time;return this.formatTime(r)}return"0"}formatTime(e){return e.toFixed(1)+" "}resetCars(){this.brands.forEach((e,r)=>{let n=document.querySelector(".card:nth-child("+(r+1)+") fa-icon");n&&(n.style.transform="translateX(0)",this.currentPositions[r]=0)}),this.winnerName=null,this.finishTimes=[],this.raceFinished=!1,this.winnersList=[]}getCurrentPosition(e){let r=window.getComputedStyle(e).getPropertyValue("transform");if(r&&r!=="none"){let n=r.split(", ");return parseInt(n[4],10)}return 0}moveCar(e,r=0){let n=document.querySelector(".card-container"),s=document.querySelector(".card:nth-child("+(e+1)+") fa-icon");if(s&&n){let t=n.clientWidth,o=s.clientWidth,f,l;t<=500?(f=280,l=280):(f=t-o,l=880);let h=Math.floor(Math.random()*5)+1,p=r;this.moveIntervals[e]=setInterval(()=>{p<f&&p<l?(p+=h,s.style.transform="translateX("+p+"px)"):this.stopMoving(e)},8/h)}}race(){this.resetCars(),this.startTime=Date.now(),this.brands.forEach((e,r)=>{this.startMoving(r)}),this.raceResultService.setWinnersList(this.winnersList)}};c.\u0275fac=function(r){return new(r||c)(V(L3),V(Z2),V(k3),V(n2),V(r2))},c.\u0275cmp=I({type:c,selectors:[["app-garage"]],decls:43,vars:7,consts:[[1,"background"],["src","https://media.istockphoto.com/id/1210045819/vector/blue-glitter-geometric-abstract-circular-gradient-background.jpg?s=612x612&w=0&k=20&c=bceTf80ZCiF2f07cRa7NYv_XfSwRQIgSQgFl2u99PTw=","alt",""],[1,"cover"],[1,"navbar"],["routerLink","/"],["routerLink","/winners"],[1,"title"],[1,"top"],[1,"race"],[3,"click"],[1,"create"],["type","text","placeholder","Type Brand Name",1,"txt",3,"ngModelChange","ngModel"],["type","color","placeholder","Color",1,"color",3,"ngModelChange","ngModel"],[1,"update"],["type","color","placeholder","New Color",1,"color",3,"ngModelChange","ngModel"],[1,"brand"],["class","card-container",4,"ngIf"],[1,"pagination"],["class","winner-div",4,"ngIf"],[1,"card-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-body"],[1,"brand-details"],[1,"buttons"],[1,"btn"],[3,"click","disabled"],[3,"icon"],[1,"card-title"],[1,"winner-div"]],template:function(r,n){r&1&&(v(0,"section")(1,"div",0),Y(2,"img",1),v(3,"div",2)(4,"div",3)(5,"button",4),H(6,"GARAGE"),d(),v(7,"button",5),H(8,"WINNERS"),d()(),v(9,"div",6)(10,"h1"),H(11,"Async"),d(),v(12,"h1"),H(13,"Race"),d()(),v(14,"div",7)(15,"div",8)(16,"button",9),b("click",function(){return n.race()}),H(17,"Race"),d(),v(18,"button",9),b("click",function(){return n.resetCars()}),H(19,"Reset"),d()(),v(20,"div",10)(21,"input",11),y2("ngModelChange",function(t){return N2(n.newBrandName,t)||(n.newBrandName=t),t}),d(),v(22,"input",12),y2("ngModelChange",function(t){return N2(n.newBrandColor,t)||(n.newBrandColor=t),t}),d(),v(23,"button",9),b("click",function(){return n.createCar()}),H(24,"Create Car"),d()(),v(25,"div",13)(26,"input",11),y2("ngModelChange",function(t){return N2(n.updatedBrandName,t)||(n.updatedBrandName=t),t}),d(),v(27,"input",14),y2("ngModelChange",function(t){return N2(n.updatedBrandColor,t)||(n.updatedBrandColor=t),t}),d(),v(28,"button",9),b("click",function(){return n.updateCar()}),H(29,"Update"),d()(),v(30,"div")(31,"div",15)(32,"button",9),b("click",function(){return n.generateBrands()}),H(33,"Generate Brands"),d()()()(),d2(34,S8,2,1,"div",16),v(35,"div",17)(36,"button",9),b("click",function(){return n.prevPage()}),H(37,"Previous"),d(),v(38,"span"),H(39),d(),v(40,"button",9),b("click",function(){return n.nextPage()}),H(41,"Next"),d()(),d2(42,w8,7,2,"div",18),d()()()),r&2&&(g(21),b2("ngModel",n.newBrandName),g(),b2("ngModel",n.newBrandColor),g(4),b2("ngModel",n.updatedBrandName),g(),b2("ngModel",n.updatedBrandColor),g(7),B("ngIf",n.brands.length>0),g(5),x2("Page ",n.currentPage,""),g(3),B("ngIf",n.winnerName))},dependencies:[q2,C3,j2,Q2,$3,D1,z1],styles:[".background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.background[_ngcontent-%COMP%]{position:relative;width:100%;height:900px;text-align:center}.cover[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%}.navbar[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;margin-left:5%;margin-top:1%}.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#efdbfbad;border:none;color:#9e67be;transition:1s}.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#e9b3f4ea;transition:1s}.title[_ngcontent-%COMP%]{display:flex;align-items:end;flex-direction:column;justify-content:center;margin-right:8%;margin-top:-8%}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:70px;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;color:#f878d0ef}.top[_ngcontent-%COMP%]{display:flex;width:90%;justify-content:space-between;margin-left:5%}.race[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#c5f4a4f4;color:#3b9b4d;transition:1s}.race[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#5ae00cdc;transition:1s}.brand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#c5f4a4f4;color:#3b9b4d;transition:1s}.brand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#5ae00cdc;transition:1s}.brand-details[_ngcontent-%COMP%]{display:flex;margin-top:-20px}.create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .update[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:none;background-color:#c5f4a4f4;color:#3b9b4d;transition:1s}.update[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#5ae00cdc;transition:1s}.txt[_ngcontent-%COMP%]{width:130px;border:none;border-radius:10px;background-color:#d5f7cbc4}.color[_ngcontent-%COMP%]{border:none;width:25px;height:20px}.card-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;align-items:center;margin-top:20px;margin-bottom:-60px;width:100%;height:650px}.card[_ngcontent-%COMP%]{width:90%;height:70px;padding:10px;border:1px solid #0c0c0ca7;border-radius:15px;box-shadow:0 4px 8px #0000001a;background-color:#5e6f795e;display:flex;align-items:start}.buttons[_ngcontent-%COMP%]{display:flex}.btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:70px;margin-left:-3%;margin-top:-13px}.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:65px;height:25px;font-size:10px;border:none;background-color:#bad0fde9;color:#0540be;transition:1s}.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#699af5;transition:1s}.card-body[_ngcontent-%COMP%]{flex-grow:1}.card-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin-left:60px;margin-top:20px;color:#00000098;font-family:Trebuchet MS,Lucida Sans Unicode,Lucida Grande,Lucida Sans,Arial,sans-serif}.card-text[_ngcontent-%COMP%]{font-size:16px}fa-icon[_ngcontent-%COMP%]{font-size:40px;color:azure;margin-left:25px}.pagination[_ngcontent-%COMP%]{display:flex;margin-left:5%}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fcfca4ed;border:none;color:#ccb610;transition:1s}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#fcfc1ffc;transition:1s}.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ccb610;margin-top:10px}.winner-div[_ngcontent-%COMP%]{position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#f878d068;padding:20px;border-radius:15px;color:#f313acc5;width:200px}button[_ngcontent-%COMP%]{border-radius:10px;padding:5px 10px;margin:5px;cursor:pointer}button[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}@media screen and (max-width: 500px){.background[_ngcontent-%COMP%]{width:100%;height:750px}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}.title[_ngcontent-%COMP%]{margin-top:-100px}.top[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.navbar[_ngcontent-%COMP%]{align-items:start}.race[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .brand[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .update[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;padding:3px 8px}.card-container[_ngcontent-%COMP%]{height:400px}.card[_ngcontent-%COMP%]{width:95%;height:50px}.btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:8px;padding:2px 5px;width:40px;height:15px;margin-left:-15px}fa-icon[_ngcontent-%COMP%]{font-size:25px;margin-left:-30px}.card-title[_ngcontent-%COMP%]{margin-top:10px}.pagination[_ngcontent-%COMP%]{margin-top:20px}.winner-div[_ngcontent-%COMP%]{width:180px;height:130px;top:20%;transform:translate(-50%)}.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}"]});let a=c;return a})();function k8(a,c){if(a&1&&(v(0,"tr")(1,"td"),H(2),d(),v(3,"td"),Y(4,"fa-icon",9),d(),v(5,"td"),H(6),d(),v(7,"td"),H(8),d(),v(9,"td"),H(10),d()()),a&2){let i=c.$implicit,e=R();g(2),Q(i.carNumber),g(2),W2("color",i.carColor),B("icon",e.faCarSide),g(2),Q(i.carName),g(2),Q(i.place),g(2),Q(i.timeTaken.toFixed(1))}}var i6=(()=>{let c=class c{constructor(e){this.raceResultService=e,this.winnersList=[],this.paginatedWinners=[],this.currentPage=1,this.pageSize=7,this.totalPages=1,this.faCarSide=J2}ngOnInit(){this.raceResultService.winnersList$.subscribe(e=>{this.winnersList=e,this.totalPages=Math.ceil(this.winnersList.length/this.pageSize),this.paginateWinners()})}paginateWinners(){let e=(this.currentPage-1)*this.pageSize,r=Math.min(e+this.pageSize,this.winnersList.length);this.paginatedWinners=this.winnersList.slice(e,r)}prevPage(){this.currentPage>1&&(this.currentPage--,this.paginateWinners())}nextPage(){this.currentPage<this.totalPages&&(this.currentPage++,this.paginateWinners())}};c.\u0275fac=function(r){return new(r||c)(V(Z2))},c.\u0275cmp=I({type:c,selectors:[["app-winners"]],decls:37,vars:2,consts:[["src","https://media.istockphoto.com/id/1210045819/vector/blue-glitter-geometric-abstract-circular-gradient-background.jpg?s=612x612&w=0&k=20&c=bceTf80ZCiF2f07cRa7NYv_XfSwRQIgSQgFl2u99PTw=","alt",""],[1,"navbar"],["routerLink","/"],["routerLink","/winners"],[1,"title"],[1,"title2"],[4,"ngFor","ngForOf"],[1,"pagination"],[3,"click"],[3,"icon"]],template:function(r,n){r&1&&(v(0,"section"),Y(1,"img",0),v(2,"div",1)(3,"button",2),H(4,"GARAGE"),d(),v(5,"button",3),H(6,"WINNERS"),d()(),v(7,"div",4)(8,"h1"),H(9,"Async"),d(),v(10,"h1"),H(11,"Race"),d()(),v(12,"div",5)(13,"h1"),H(14,"WINNERS"),d()(),v(15,"table")(16,"thead")(17,"tr")(18,"th"),H(19,"CAR NUMBER"),d(),v(20,"th"),H(21,"CAR"),d(),v(22,"th"),H(23,"NAME"),d(),v(24,"th"),H(25,"WINS"),d(),v(26,"th"),H(27,"BEST TIME (SECONDS)"),d()()(),v(28,"tbody"),d2(29,k8,11,7,"tr",6),d()(),v(30,"div",7)(31,"button",8),b("click",function(){return n.prevPage()}),H(32,"Previous"),d(),v(33,"span"),H(34),d(),v(35,"button",8),b("click",function(){return n.nextPage()}),H(36,"Next"),d()()()),r&2&&(g(29),B("ngForOf",n.winnersList),g(5),x2("Page ",n.currentPage," "))},dependencies:[q2,j2,z1],styles:["section[_ngcontent-%COMP%]{position:relative;width:100%;height:600px}section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:800px;object-fit:cover;position:absolute;top:0;left:0;z-index:-1}.navbar[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;margin-left:5%;margin-top:1%}.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#efdbfbad;border:none;color:#9e67be;border-radius:10px;cursor:pointer;gap:1px;transition:background-color .5s}.navbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#e9b3f4ea;transition:1s}.title[_ngcontent-%COMP%]{display:flex;align-items:end;flex-direction:column;justify-content:center;margin-right:8%;margin-top:-8%}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center;font-size:70px;font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif;color:#f878d0ef}.title2[_ngcontent-%COMP%]{color:#f878d0ef;margin-left:11%}.winners-table[_ngcontent-%COMP%]{margin-top:50px}table[_ngcontent-%COMP%]{width:80%;margin:0 auto;border-collapse:collapse;height:450px}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{color:#f837bbdc;padding:10px;text-align:center;border-bottom:1px solid rgba(0,0,0,.1)}th[_ngcontent-%COMP%]{background-color:#efdbfbad}button[_ngcontent-%COMP%]{border-radius:10px;padding:5px 10px;margin:5px;cursor:pointer}.pagination[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;margin-left:5%;margin-top:30px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#fcfca4ed;border:none;color:#ccb610;transition:1s}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#fcfc1ffc;transition:1s}.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ccb610;margin-top:10px}@media only screen and (max-width: 500px){section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:650px}th[_ngcontent-%COMP%]{font-size:16px}h1[_ngcontent-%COMP%]{font-size:24px}.title[_ngcontent-%COMP%]{margin-top:-100px}.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:40px}.title2[_ngcontent-%COMP%]{text-align:start}table[_ngcontent-%COMP%]{width:95%;height:470px}.pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:12px;padding:3px 8px}.pagination[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}.pagination[_ngcontent-%COMP%]{margin-top:10px}}"]});let a=c;return a})();var A8=[{path:"",component:e6},{path:"winners",component:i6}],r6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=D({type:c}),c.\u0275inj=_({imports:[S1.forRoot(A8),S1]});let a=c;return a})();var V1=(()=>{let c=class c{constructor(){this.title="Async-Race"}};c.\u0275fac=function(r){return new(r||c)},c.\u0275cmp=I({type:c,selectors:[["app-root"]],decls:1,vars:0,template:function(r,n){r&1&&Y(0,"router-outlet")},dependencies:[w3]});let a=c;return a})();var n6=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=D({type:c,bootstrap:[V1]}),c.\u0275inj=_({providers:[y3()],imports:[b3,r6,x3,Q3,Z4,g3]});let a=c;return a})();var P8=(()=>{let c=class c{};c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=D({type:c,bootstrap:[V1]}),c.\u0275inj=_({imports:[n6,S3]});let a=c;return a})();export{P8 as a};
