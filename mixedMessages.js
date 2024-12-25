const arr = [
    "Believe in the power of yet. You may not have succeeded yet, but your journey is far from over.",
    "Small steps forward still count as progress. Keep going; you're closer than you think.",
    "Embrace the unknown—it’s where the greatest opportunities for growth are hiding.",
    "You are braver than your fears and stronger than your doubts. Trust yourself.",
    "Dream big, but remember to celebrate the small victories along the way.",
    "Your past does not define you; the choices you make today shape your future.",
    "Even in the darkest moments, light is just a little effort away—keep searching for it.",
    "You have the power to create change; one action, one step, one day at a time.",
    "Every challenge is a chance to learn, grow, and emerge even more resilient.",
    "Your potential is limitless; don't let fear or doubt shrink your vision."
];

const randomMessage = arr[Math.floor(Math.random() * arr.length)];

console.log(randomMessage);