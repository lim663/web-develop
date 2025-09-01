<template>
  <div class="product-container">
    <div class="product-details">
      <h1 class="product-name">{{ product.name }}</h1>
      <div class="product-lower-section">
        <img :src=img alt="Product Image" class="product-image">
        <button @click="buyProduct" class="buy-button">3D模型</button>
      </div>
    </div>
  </div>
  <div class="product-description">
    <h2 class="description-title">详情介绍</h2>
    <p>{{ product.description }}</p>
    <h2 class="description-title">知识延申</h2>
    <h3 class="description-sidetitle">唐三彩的历史渊源</h3>
    <p>{{ knowledge.one }}</p>
    <h3 class="description-sidetitle">陶瓷技艺发展历程</h3>
    <p>{{ knowledge.two }}</p>
    
  </div>
  <div class="timeline-container">
    <h2 class="timeline-title">我国陶瓷技艺发展时间轴</h2>
    <div class="timeline">
      <div
        v-for="(event, index) in timelineEvents"
        :key="index"
        class="timeline-item"
      >
        <div class="line"></div> <!-- 横线 -->
        <div class="circle"></div> <!-- 节点 -->
        <div class="timeline-item-content" @mouseover="showDetails(event)">
          <h3 class="timeline-item-title">{{ event.title }}</h3>
          <p class="timeline-item-description">{{ event.description }}</p>
          <span class="timeline-item-date">{{ event.date }}</span>
        </div>
      </div>
    </div>
    <div class="timeline-footer"></div> <!-- 底部留白 -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      product: {
        name: '唐三彩骆驼奏乐佣',
        price: 199,
  
        description: '骆驼、胡人、音乐，是唐三彩的重要组成部分，作为演出的配角，这只双峰骆驼曲颈昂首，头顶鬃毛下垂至后项，项下的长鬃垂飘逸至胸下。演奏家是一位胡人，他坐在骆驼背上，身下铺着类似波斯地毯的毡垫，头戴尖顶毡帽，颧骨高耸，眉毛粗黑，高挑的鼻梁，眼眶深陷，还有一脸络腮胡须。胡人奏乐弹唱，骆驼引吭高歌，彰显了盛唐的繁荣景象。'
      },
      img,
      knowledge:{
        one: '在盛唐时期，国家繁荣昌盛，经济、文化、政治发展迅速，这直接导致了在当时社会上的制陶业发展繁荣，手工业的繁荣发展让制陶工艺的质量得到进一步的提高。再加上大唐盛世，厚葬之风盛行，所以色彩绚丽的唐三彩，便成为了帝王将相陪葬品的首选。三彩是唐代彩色釉陶的总称，那么为什么偏偏是数字“三”呢？唐三彩是以黄、白、绿为基本釉色。而众多考古学家在唐朝的墓穴中所挖掘出的各种陶俑、陶器中发现出不同的色彩：白、浅绿、深蓝、黄、褐色等等，色彩丰富程度可见一斑，因此将这批文物称之为唐三彩。但也有一些历史学家提出了不同的意见提，在早期出土的唐朝彩釉、雕塑中，大多是红绿白三种颜色，因此，“唐三彩”的名称由此而来，对于这两种说法，学者们意见不一。',
        two:'原始时期的陶器大致经历了裴李岗文化，仰韶文化，屈家岭文化，大汶口文化，龙山文化等阶段。在数千年的历史长河中生产力水平的发展促进了手工业发展，陶瓷的生产技艺也有了进一步改进、变革和发展。'
      },
      timelineEvents: [
        { title: '旧石器时代', description: '灰陶' ,data:''},
        { title: '旧石器时代-公元前约6000年', description: '红陶',data:''},
        { title: '公元前约6000年-公元前约5000年', description: '彩陶',data:''},
        { title: '公元前约5000年-公元前约4000年', description: '黑陶',data:''},
        { title: '商朝', description: '白陶',data:''},
        { title: '西周', description: '硬陶',data:''},
        { title: '汉代', description: '釉陶',data:''},
        { title: '唐代', description: '唐三彩',data:''},
        { title: '宋、辽', description: '三彩器',data:''},
        { title: '明、清', description: '紫砂壶、陶塑',data:''},
      ],
      showDetail: false,
      hoveredEvent: {}
    }
  },
  methods: {
    buyProduct() {
      window.location.href = 'http://localhost:5173/player.html';
    },
    showDetails(event) {
      this.hoveredEvent = event;
      this.showDetail = true;
    }
  }
}
</script>

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
.product-details {
  flex-grow: 1;
}
.product-name {
  text-transform: uppercase; /* 大写 */
  font-size:2rem;
  font-weight: bold; /* 加粗 */
  color: #FF4500; /* 橙色 */
  margin-bottom: 20px; /* 与下方内容间隔 */
}
.product-lower-section {
  display: flex;
  align-items: center;
}
.product-image {
  max-width: 300px;
  width: 80%  ;
  margin-right: 20px;
}
.buy-button {
  position: relative;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}
.buy-button:hover {
  background-color: #45a049;
}
.product-description {
  width: 80%;
  margin: 40px auto;
}
.description-title {
  font-size: 24px;
  font-weight: bold;
  margin-top:20px ;
  margin-bottom: 10px;
 
}
.description-sidetitle{
  font-size:22 ;
  color: coral;
  font-weight: bold;
  margin: bottom 22px; 
}

.timeline-container {
  width: 80%;
  margin: 30px auto 30px ; 
}

.timeline-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.timeline {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.timeline-item {
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
}

.line {
  flex-grow: 1;
  height: 2px;
  background-color: #ccc;
}

.circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #4CAF50;
  margin: 0 8px;
}

.timeline-item-content {
  display: none;
}

.timeline-item:hover .timeline-item-content {
  display: block;
}

.timeline-item-title {
  font-weight: bold;
  margin-bottom: 5px;
}

.event-details {
  margin-top: 20px;
}
.timeline-footer {
  height: 100px; /* 底部留白高度 */
}
</style>
