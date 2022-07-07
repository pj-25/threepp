export { default as InteractiveCamera } from "./viewport/interactiveObjects/InteractiveCamera.js"
export { default as InteractiveLight } from "./viewport/interactiveObjects/InteractiveLight.js"
export { default as InteractiveMesh } from "./viewport/interactiveObjects/InteractiveMesh.js"
export { default as InteractiveModel } from "./viewport/interactiveObjects/InteractiveModel.js"
export { default as InteractiveObjectHelper } from "./viewport/interactiveObjects/InteractiveObjectHelper"


export { default as DirectionalLightProperty } from "./viewport/propertyController/lightPropertyController/DirectionalLightProperty.js"
export { default as HemisphereLightProperty } from "./viewport/propertyController/lightPropertyController/HemisphereLightProperty.js"
export { default as LightPropertyController } from "./viewport/propertyController/lightPropertyController/LightPropertyController.js"
export { default as PointLightProperty } from "./viewport/propertyController/lightPropertyController/PointLightProperty.js"
export { default as RectAreaLightProperty } from "./viewport/propertyController/lightPropertyController/RectAreaLightProperty.js"
export { default as SpotLightProperty } from "./viewport/propertyController/lightPropertyController/SpotLightProperty.js"

export { default as BoxProperty } from "./viewport/propertyController/meshPropertyController/BoxProperty.js"
export { default as CircleProperty } from "./viewport/propertyController/meshPropertyController/CircleProperty.js"
export { default as ConeProperty } from "./viewport/propertyController/meshPropertyController/ConeProperty.js"
export { default as CylinderProperty } from "./viewport/propertyController/meshPropertyController/CylinderProperty.js"
export { default as IcosahedronProperty } from "./viewport/propertyController/meshPropertyController/IcosphereProperty"
export { default as MeshPropertyController } from "./viewport/propertyController/meshPropertyController/MeshPropertyController.js"
export { default as PlaneProperty } from "./viewport/propertyController/meshPropertyController/PlaneProperty.js"
export { default as SphereProperty } from "./viewport/propertyController/meshPropertyController/SphereProperty.js"
export { default as TextProperty } from "./viewport/propertyController/meshPropertyController/TextProperty.js"
export { default as TorusProperty } from "./viewport/propertyController/meshPropertyController/TorusProperty.js"

export { default as CameraPropertyController } from "./viewport/propertyController/CameraPropertyController.js"
export { default as PropertyController } from "./viewport/propertyController/PropertyController.js"


export { default as AssetsManager } from "./viewport/utils/AssetsManager.js"
export { default as ObjectGenerator } from "./viewport/utils/ObjectGenerator.js"
// export { default as TextureType } from "./viewport/utils/TextureType.js"


export { default as CameraSelector } from './viewport/CameraSelector.js'
export { default as ControlledCamera } from './viewport/ControlledCamera.js'
export { default as PropertiesPane } from './viewport/PropertiesPane.js'
export { default as Viewport } from './viewport/Viewport.js'

if (typeof window !== 'undefined') {

    if (window.__THREEPP__) {

        console.warn('WARNING: Multiple instances of Three.js being imported.');

    } else {

        window.__THREEPP__ = true;

    }

}