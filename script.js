let jokearr = [`“Knock, knock.” “Who’s there?” very long pause…. “Java.”`, `A man is smoking a cigarette and blowing smoke rings into the air.  His girlfriend becomes irritated with the smoke and says, “Can’t you see the warning on the cigarette pack?  Smoking is hazardous to your health!” To which the man replies, “I am a programmer.  We don’t worry about warnings; we only worry about errors.”`, `One hundred little bugs in the code One hundred little bugs. Fix a bug, link the fix in, One hundred little bugs in the code.` , `The three most dangerous things in the world are a programmer with a soldering iron, a hardware engineer with a software patch, and a user with an idea.`,`Never trust atoms; they make up everything.`,`Why was the math book sad? Because it had so many problems`,`Why was six scared of seven? Because seven “ate” nine`,`What did one toilet say to the other ? You look a bit flushed.`,`What’s the difference between a hippo and a Zippo? One is very heavy, the other is a little lighter!`];


runjoke = ()=>{
    let jokenum = Math.floor(Math.random() * jokearr.length);
    let jokegot = jokearr[jokenum];

    let pushjoke = document.getElementById("jokecontent");
    pushjoke.innerHTML = jokegot;
}
