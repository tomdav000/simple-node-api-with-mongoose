const express = require('express');
const mongoose = require('mongoose');
const Workout = require('../models/Workout');
const router = express.Router();

router.get('/',async(req,res)=>{
	try{
		const workouts = await Workout.find();
		res.send(workouts);
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...')
	}
})

router.post('/',async(req,res)=>{
	try{
		let newWorkout = new Workout({
			name: req.body.name,
			purpose: req.body.purpose
		});
		await newWorkout.save();
		res.redirect('/');
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...')
	}
})

router.put('/:id',async(req,res)=>{
	try{
		let workout = await Workout.findByIdAndUpdate(req.params.id);
		workout.name = req.body.name;
		workout.purpose = req.body.purpose;
		await workout.save();
		res.redirect(req.params.id);
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...')
	}
})

router.get('/:id',async(req,res)=>{
	try{
		const workout = await Workout.findById(req.params.id);
		res.send(workout);
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...')
	}
})

router.delete('/:id',async(req,res)=>{
	try{
		const workout = await Workout.findByIdAndRemove(req.params.id);
		res.redirect('/');
	} catch(err){
		console.error(err);
		res.status(500).send('Not Available...')
	}
})


module.exports = router;