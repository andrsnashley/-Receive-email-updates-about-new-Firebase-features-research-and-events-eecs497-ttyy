<template>

    <div id="app">
        <h2>Sign Up </h2>
        <form @submit.prevent="loginWithPassword">
        <label>
            username
            <input type="text" v-model="emailOrUsername" />
        </label>
        <label>
            Password
            <input type="password" v-model="password" />
        </label>
     
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
        <label for="vehicle1"> I have a bike</label><br>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
        <label for="vehicle2"> I have a car</label><br>
        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
        <label for="vehicle3"> I have a boat</label><br><br>
        <input type="submit" value="Submit">

        <button type="submit">Create Account</button>
        </form>
    </div>
  
</template>

