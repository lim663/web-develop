import './assets/index.css'
import './assets/reset.css'
import './assets/public.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as GaussianSplats3D from '@mkkellogg/gaussian-splats-3d';
import * as THREE from 'three';
import  viewer  from './Viewer';

viewer.start
const app=createApp(App)
app.mount('#app')
