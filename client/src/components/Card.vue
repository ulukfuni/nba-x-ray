<template>
	<div class="card">
		<div class="content">
			<p><strong>{{title}}</strong></p>
			<p>{{text}}</p>
			<p><small>{{date}}</small></p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Card',
		props: ['text', 'title', 'date']
	}
</script>
<style>
	.card {
		width: 390px;
		background: grey;
		border-radius: 5px;
		margin: 5px;
		display: inline-block;
	}
	.content {
		width: 380px;
		background: white;
		border-radius: 5px;
		position: relative;
		margin: auto;
		top: 10px;
	}
</style>