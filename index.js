let obj1 = { name: "yunus emre" };
obj1.surname = "vurgun";
obj1.age = "23";
obj1.web = "yunusemrevurgun.com";

let obj2 = { name: "sponge bob" };
obj2.surname = "squarepants";
obj2.age = "100";
obj2.web = "i-live-under-the-sea.spongebob";

objects = [obj1, obj2];

for (let i = 0; i < objects.length; i++) {

    console.log(objects[i].name);

}
