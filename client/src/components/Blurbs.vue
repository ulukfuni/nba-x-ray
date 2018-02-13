<template>
	<div class="container">
		<card v-for="(blurb, index) of blurbs" :text="blurb.text" :title="blurb.title" :date="blurb.date" :key="blurb.key"></card>
	</div>
</template>
<script>
	import axios from 'axios';
	import Card from './Card.vue';
	export default {
		components: {
			'card': Card
		},
		data() {
			return {
				blurbs: [],
				errors: []
			}
		},
		beforeCreate() {
			axios.get(`http://localhost:4000/hoop-ball`)
			.then(res => {
				this.blurbs = res.data;
			})
			.catch(e => {
				this.errors.push(e);
			})
		}
	}
</script>
<style scoped>
	.container {
		display: flex;
		width: 1200px;
		flex-wrap: wrap;
		margin: auto;
	}
</style>