<template>
    <div ref="container" class="three-container"></div>
</template>

<script>
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

export default {
    name: 'ThreeDModel',
    mounted() {
        this.initThreeJS();
    },
    methods: {
        initThreeJS() {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            camera.position.z = 2;

            const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            const container = this.$refs.container;
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setClearColor(0x000000, 0); // Transparent background
            container.appendChild(renderer.domElement);

            // Adjust lighting
            const light = new THREE.DirectionalLight(0xffffff, 2); // Increased intensity
            light.position.set(5, 5, 5).normalize();
            scene.add(light);

            const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Ambient light with lower intensity
            scene.add(ambientLight);

            // Add a point light for additional illumination
            const pointLight = new THREE.PointLight(0xffffff, 1.5, 100); // Added point light
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            const loader = new STLLoader();
            const modelUrl = '/fulanasxx/models/FULANAX3.stl'; // Ruta correcta
            loader.load(modelUrl, (geometry) => {
                // Create a red lacquered effect with original color
                const material = new THREE.MeshStandardMaterial({
                    color: 0xff0000, // Original red color
                    metalness: 0.8, // High metalness for shine
                    roughness: 0.2, // Low roughness for shine
                    emissive: 0x000000, // Optional: set to black to avoid glowing effect
                });
                const mesh = new THREE.Mesh(geometry, material);

                // Center the model and calculate the bounding box
                geometry.computeBoundingBox();
                const boundingBox = geometry.boundingBox;
                const size = boundingBox.getSize(new THREE.Vector3());

                // Scale down the model by 10% from the previous size (initialScale 0.064)
                const initialScale = 0.0704; // 7.04% of the original size
                mesh.scale.set(initialScale, initialScale, initialScale);

                // Calculate the scaling factor to fit the model within the container
                const containerWidth = container.clientWidth;
                const containerHeight = container.clientHeight;
                const scaledSize = size.clone().multiply(new THREE.Vector3(initialScale, initialScale, initialScale));
                const scaleX = containerWidth / scaledSize.x;
                const scaleY = containerHeight / scaledSize.y;
                const scale = Math.min(scaleX, scaleY);

                // Apply the scaling factor and center the model
                mesh.scale.set(scale, scale, scale);
                geometry.center();

                scene.add(mesh);

                // Animation
                let angle = 0;
                const animate = () => {
                    requestAnimationFrame(animate);
                    angle += 0.01;
                    mesh.rotation.x = angle;
                    mesh.rotation.y = angle;
                    renderer.render(scene, camera);
                };
                animate();

                // Handle resize
                window.addEventListener('resize', () => {
                    this.resizeRendererAndCamera(renderer, camera, mesh);
                });

                // Initial resize
                this.resizeRendererAndCamera(renderer, camera, mesh);
            }, undefined, (error) => {
                console.error('Error loading STL model:', error);
            });
        },
        resizeRendererAndCamera(renderer, camera, mesh) {
            const container = this.$refs.container;
            const width = container.clientWidth;
            const height = container.clientHeight;
            const aspect = width / height;

            // Update camera
            camera.aspect = aspect;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);

            // Rescale the model to fit the container
            this.scaleModelToFit(mesh, width, height);
        },
        scaleModelToFit(mesh, width, height) {
            // Get the bounding box of the model
            const boundingBox = new THREE.Box3().setFromObject(mesh);
            const size = boundingBox.getSize(new THREE.Vector3());

            // Calculate scale factors to fit the model inside the container
            const widthScale = width / size.x;
            const heightScale = height / size.y;
            const scale = Math.min(widthScale, heightScale);

            // Apply the scale to the model
            mesh.scale.set(scale, scale, scale);

            // Recenter the model
            boundingBox.setFromObject(mesh);
            const modelCenter = boundingBox.getCenter(new THREE.Vector3());
            mesh.position.sub(modelCenter);
        }
    }
};
</script>

<style>
.three-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
</style>