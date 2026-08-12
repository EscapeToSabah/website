import { Experience, Story, Tip } from "./types";

/**
 * This is demo content that ships with the project so the site runs
 * and looks right the moment you clone it -- before you've connected
 * your own Google Sheet. Once NEXT_PUBLIC_SHEET_ID is set in .env.local, every
 * one of these is replaced by your sheet's rows. See README.md.
 */

export const sampleStories: Story[] = [
  {
    slug: "sunrise-on-low-s-peak",
    title: "What 4am on Low's Peak Actually Feels Like",
    excerpt:
      "The climb up Mount Kinabalu is sold as a sunrise photo. Nobody mentions the forty minutes before it, in the dark, above the clouds.",
    coverImage: "mountain-sunrise",
    author: "Aida Rahman",
    date: "2026-02-18",
    tags: ["Mount Kinabalu", "Hiking", "First-Person"],
    featured: true,
    content: `Laban Rata wakes you at 2am whether you slept or not. Most people didn't -- the dormitory is thin-walled and the altitude sits on your chest like a hand.

Outside, headlamps form a slow constellation up the granite. This is the part the brochures skip: two hours of switchback ropes and cold rock in the pitch dark, breathing in a rhythm you didn't know your lungs had. Somewhere around Sayat-Sayat checkpoint, the guides stop checking permits and start checking faces instead.

## The last three hundred metres

There's a stretch just past the checkpoint where the trail turns to bare granite dome, no vegetation, no shelter, just white rope bolted into stone. This is where the wind decides whether your summit photo happens.

By the time Low's Peak actually appears -- a modest outcrop, smaller than you'd expect for something this famous -- the sky to the east has already started to bruise purple. You don't so much arrive as get pulled the last twenty metres by momentum and other people's excitement.

## What nobody tells you about the sunrise itself

It's fast. The whole performance -- the sea of cloud below catching gold, South China Sea visible on a clear day, the summit crowd going quiet all at once -- lasts about four minutes before the light flattens out and everyone remembers how cold their hands are.

Then it's the walk back down, which is its own kind of brutal on a completely different set of muscles. Nobody warns you about that part either.

**If you're planning this yourself:** book Laban Rata months ahead, break in your boots for at least three weeks before, and pack a headlamp with fresh batteries -- your phone flashlight will not survive four hours at that temperature.`,
  },
  {
    slug: "orangutan-that-ignored-me",
    title: "The Orangutan That Completely Ignored Me at Sepilok",
    excerpt:
      "I went to the rehabilitation centre expecting eye contact and a moment. I got a fifteen-minute lesson in being irrelevant.",
    coverImage: "orangutan",
    author: "Marcus Tan",
    date: "2026-01-09",
    tags: ["Wildlife", "Sepilok", "First-Person"],
    featured: true,
    content: `The feeding platform at Sepilok Orangutan Rehabilitation Centre is set back from the viewing gallery by maybe twenty metres, which felt, on my first visit, like a design flaw. I wanted closer. I wanted a moment.

What I got instead was a large male, unbothered by the forty tourists behind the railing, working through a pile of bananas with the exact focus of someone who has better things to think about than being watched. He never once looked our way.

## That's kind of the point

Sepilok exists to return orphaned and displaced orangutans to the wild, not to perform for cameras. The feeding platforms are a deliberate compromise -- enough food to supplement what the surrounding forest can't yet provide, not so much that the animals stop foraging on their own. Guides here will tell you, a little proudly, when a regular stops showing up at feeding time. It means the forest is working.

## Go at the first feeding, not the second

The centre runs two public feedings a day. The 10am session draws bus tours from Sandakan and gets crowded fast. The earlier slot, right at opening, is quieter, cooler, and the animals seem to move through the canopy more -- swinging in from the treeline instead of already waiting on the platform.

Pair it with the Rainforest Discovery Centre next door if you have the afternoon -- the canopy walkway there puts you at the same height as the treetops Sepilok's residents are learning to live in.`,
  },
  {
    slug: "night-on-kinabatangan",
    title: "A Night Cruise on the Kinabatangan Taught Me to Stop Talking",
    excerpt:
      "Our boat guide cut the engine and just pointed a torch at the riverbank. That was the whole trick.",
    coverImage: "river-night",
    author: "Aida Rahman",
    date: "2025-11-22",
    tags: ["Wildlife", "Kinabatangan River", "First-Person"],
    featured: false,
    content: `Everyone on the boat had a camera ready, phones out, half-whispering to each other about what we might see. Our guide, a quiet man named Jefri who'd clearly done this ten thousand times, said one thing before we set off: "Talk less, we see more."

He was right, obviously.

## What the dark actually holds

Once the engine cuts and the boat drifts, the Kinabatangan stops being scenery and starts being alive. Jefri's torch beam catches eyeshine along the bank -- saltwater crocodiles, motionless, waiting. Further up, a family of proboscis monkeys settle into the branches for the night, oblivious to us. Somewhere in the canopy, something large moves and nobody sees what.

We found a coiled reticulated python draped over a low branch, digesting something it had caught days earlier. We found fireflies synchronising their blink along a single dead tree, which looked, from a distance, like a building with faulty Christmas lights.

## The unglamorous logistics

Book a lodge that runs its own night cruise rather than a day-tripper package from Sandakan -- you want the boat leaving from your accommodation at dusk, not driving an hour after the good light is gone. Bring a jacket even though it's the tropics; the river air drops fast after dark, and you'll be sitting still for two hours.`,
  },
  {
    slug: "getting-lost-in-kk-wet-market",
    title: "I Got Lost in the Kota Kinabalu Night Market and It Was the Best Part of My Trip",
    excerpt:
      "No plan, no map, just the Gaya Street night market and whatever smelled good.",
    coverImage: "night-market",
    author: "Marcus Tan",
    date: "2025-10-30",
    tags: ["Food", "Kota Kinabalu", "City"],
    featured: false,
    content: `I'd planned my entire Kota Kinabalu evening around a restaurant recommendation that turned out to be closed for a private function. What I did instead, out of mild desperation, was walk toward the noise.

The noise turned out to be the Gaya Street Sunday market extending into the surrounding night stalls -- not the tidy, curated version you see in guidebook photos, but the real sprawl of it: grilled stingray wrapped in banana leaf, tuhau (a wild ginger relative that tastes like nothing else you've had), fresh sugarcane juice pressed while you wait, and a dessert stall doing something extraordinary with pulut and coconut that I never found the name of.

## The trick is to not have a plan

Every stall is a one-dish specialist. Nobody's trying to sell you a full meal -- you're meant to graze across six stalls and call it dinner. Bring small notes, not cards. Point at what looks good if the name isn't in a language you read.

If you only do one food thing in KK, skip the sit-down seafood restaurants on your first night and do this instead. You'll find your favourite meal of the trip by accident, the same way I did.`,
  },
];

export const sampleTips: Tip[] = [
  {
    slug: "when-to-visit",
    title: "The Real Weather Pattern (Not the Brochure Version)",
    category: "Before You Go",
    icon: "CloudSun",
    order: 1,
    summary:
      "Sabah is tropical year-round, but the difference between March and January is bigger than most guides admit.",
    content: `Sabah doesn't have a hard dry season the way mainland Southeast Asia does, but it does have a distinct pattern: **March to August** runs noticeably drier, which matters most if Mount Kinabalu or island-hopping is the point of your trip. Rough seas from November to February can cancel Sipadan and Mabul boat transfers with no notice, so if diving is the priority, don't book that window.

Rain here rarely ruins a whole day -- it's usually a heavy hour in the afternoon, then clear again. Build flexibility into outdoor plans rather than avoiding the wet months entirely; you'll get better hotel rates and thinner crowds at Kinabalu Park in exchange for carrying a poncho.`,
  },
  {
    slug: "mabul-vs-sipadan",
    title: "Sipadan Has a Daily Permit Limit. Plan Around It.",
    category: "Before You Go",
    icon: "Ticket",
    order: 2,
    summary:
      "Only 176 divers are allowed on Sipadan per day, split across operators. Book months out, not weeks.",
    content: `Sipadan's dive permit system caps daily access to protect the reef, and permits are allocated to registered dive operators, not directly to individuals. In practice this means: pick your operator first, then your dates, and expect to book **at least 3-4 months ahead** in peak season (April-October).

If you can't get a Sipadan slot, don't treat it as a consolation prize to dive Mabul instead -- Mabul's muck diving (frogfish, mandarin fish, ghost pipefish) is a genuinely different, equally serious kind of diving that many underwater photographers actively prefer. Book Mabul on its own terms, not as a backup.`,
  },
  {
    slug: "getting-around-sabah",
    title: "Rent a Car for the West Coast, Fly for Everything Else",
    category: "Getting Around",
    icon: "Car",
    order: 3,
    summary:
      "Sabah is bigger than it looks on a map. Kota Kinabalu to Sandakan is a 6-hour drive -- fly it instead.",
    content: `The Kota Kinabalu to Kundasang / Mount Kinabalu Park road is well-paved, well-signed, and genuinely enjoyable to self-drive, which makes a rental car worth it for the west coast leg of a trip.

Once you're heading east toward Sandakan, the Kinabatangan River, or Sepilok, the road trip stops being charming and starts being a 6+ hour haul through logging traffic. **Fly instead** -- MASwings and AirAsia both run short, cheap hops between Kota Kinabalu and Sandakan or Tawau, and it turns a lost day into a lost hour.

Within Kota Kinabalu itself, Grab (the regional ride-hailing app) covers the city reliably and is the easiest way to get around without a car.`,
  },
  {
    slug: "money-and-connectivity",
    title: "Cash Still Rules Outside the City",
    category: "Money & Practical",
    icon: "Wallet",
    order: 4,
    summary:
      "Card payments are common in Kota Kinabalu, close to nonexistent on the islands and in rural lodges.",
    content: `Kota Kinabalu functions like any modern city for payments -- cards and e-wallets are widely accepted. That changes fast once you're on Mabul, in a Kinabatangan River lodge, or at a homestay near Kinabalu Park. **Carry enough ringgit in cash** to cover a few days once you leave the city; ATMs thin out quickly east and inland.

A local SIM (Digi and Celcom both have reasonable rural coverage) is worth getting at the airport on arrival -- signal drops out on parts of the Kinabatangan and around the mountain, so don't count on it as a safety net, but it's solid everywhere else.`,
  },
  {
    slug: "what-to-pack",
    title: "Pack for Three Climates in One Bag",
    category: "Before You Go",
    icon: "Backpack",
    order: 5,
    summary:
      "You'll likely hit humid lowland, cold mountain summit, and open water in the same trip -- pack accordingly.",
    content: `A Sabah itinerary that includes Mount Kinabalu, the rainforest, and the islands puts three different climates in one packing list.

For the summit: thermal layers, gloves, and a headwind-resistant jacket -- it drops close to freezing at Low's Peak before sunrise, even though you started the day sweating in tropical humidity. For the lowlands and rainforest: quick-dry clothing, a proper rain shell, and shoes you don't mind getting muddy. For the islands: reef-safe sunscreen specifically -- several dive operators will check, since regular sunscreen damages coral -- and a rash guard, since equatorial sun burns faster than most visitors expect.

Leeches are a normal, harmless part of rainforest walks after rain. Leech socks help; panic doesn't.`,
  },
  {
    slug: "respecting-local-culture",
    title: "Sabah Isn't Peninsular Malaysia -- Don't Assume the Same Etiquette",
    category: "Culture",
    icon: "Handshake",
    order: 6,
    summary:
      "Sabah's indigenous communities (Kadazan-Dusun, Bajau, Murut, and more) have their own customs worth knowing.",
    content: `Sabah's ethnic makeup is genuinely distinct from the peninsula -- Kadazan-Dusun, Bajau, Murut, and dozens of smaller indigenous groups make up a large share of the population, alongside Malay, Chinese, and other communities. Assuming peninsular Malaysian customs apply everywhere will occasionally get things wrong.

If you're invited into a longhouse or village homestay, wait to be shown where to sit, accept food or drink offered even if it's a small amount, and ask before photographing people directly -- not out of strict taboo, but plain courtesy. Harvest Festival (Kaamatan), celebrated across May, is a genuinely good time to be in Sabah if your dates align -- expect closures and celebration rather than quiet sightseeing.`,
  },
];

export const sampleExperiences: Experience[] = [
  {
    slug: "mount-kinabalu-summit",
    title: "Summit Mount Kinabalu",
    category: "Mountains",
    location: "Kinabalu Park",
    elevationM: 4095,
    difficulty: "Challenging",
    duration: "2 days",
    image: "mountain-summit",
    featured: true,
    summary:
      "South-East Asia's highest peak between the Himalayas and New Guinea, climbed over two days via Laban Rata.",
    content: `At 4,095 metres, Low's Peak is the highest point between the Himalayas and New Guinea -- and, unusually for a mountain this significant, it's climbable by anyone with reasonable fitness and no technical experience, provided you respect the altitude.

The standard route splits the climb over two days: Timpohon Gate to Laban Rata (roughly 6km, 6-hour climb through changing forest zones) on day one, then a 2am start for the final push to the summit for sunrise, before descending all the way back down on day two. A certified guide is mandatory and provided as part of the climb permit.

Permits are limited daily and Laban Rata accommodation books out months ahead in peak season -- this is not a trip you plan the week before.`,
  },
  {
    slug: "sepilok-orangutans",
    title: "Meet the Residents of Sepilok",
    category: "Wildlife",
    location: "Sepilok, near Sandakan",
    elevationM: 45,
    difficulty: "Easy",
    duration: "Half day",
    image: "orangutan-canopy",
    featured: true,
    summary:
      "A working rehabilitation centre for orphaned orangutans, with two public feeding sessions daily.",
    content: `Sepilok Orangutan Rehabilitation Centre isn't a zoo -- it's a working rehabilitation facility that has been returning orphaned and displaced orangutans to the surrounding forest since 1964. Visitors watch from a raised gallery at scheduled feeding times, and how many animals show up depends entirely on how well the forest is currently providing for them, which the centre treats as a genuinely good sign rather than a disappointment.

Two feeding windows run daily, roughly mid-morning and mid-afternoon. The earlier one tends to be quieter and cooler. The adjoining Rainforest Discovery Centre offers a canopy walkway at treetop height, worth combining into the same visit.`,
  },
  {
    slug: "sipadan-diving",
    title: "Dive the Wall at Sipadan",
    category: "Islands & Diving",
    location: "Sipadan Island",
    elevationM: -600,
    difficulty: "Advanced (certified divers)",
    duration: "Full day",
    image: "reef-wall",
    featured: true,
    summary:
      "An oceanic island rising from a 600-metre wall, famous for turtles, barracuda tornadoes, and permit-limited access.",
    content: `Sipadan is one of the few genuinely oceanic islands in the region -- it doesn't sit on a continental shelf, it rises straight from the seabed roughly 600 metres below. That drop-off, right at the shoreline, is what makes it one of the most cited dive sites in the world.

Green and hawksbill turtles are close to guaranteed. Barracuda Point is famous for its spiralling schools, and White Tip Avenue for resting reef sharks along ledges in the wall. Access is capped at 176 divers per day across all operators, allocated by permit -- book your operator and dates well ahead, especially April to October.`,
  },
  {
    slug: "kinabatangan-river-safari",
    title: "River Safari on the Kinabatangan",
    category: "Wildlife",
    location: "Kinabatangan River",
    elevationM: 20,
    difficulty: "Easy",
    duration: "1-2 days",
    image: "river-safari",
    featured: true,
    summary:
      "Borneo's longest river, and one of the most reliable places on Earth to see wild orangutans and proboscis monkeys.",
    content: `Sabah's longest river cuts through one of the last significant stretches of lowland rainforest left on the island, and its wildlife density is a direct result of that habitat being squeezed narrower by surrounding plantation. Morning and evening boat cruises are the standard way to see it -- proboscis monkeys settling into riverside trees at dusk, wild orangutans if you're fortunate, monitor lizards, hornbills, and, after dark, crocodile eyeshine along the banks.

Staying overnight at a riverside lodge, rather than day-tripping from Sandakan, gets you the dawn and dusk cruises that see the most activity.`,
  },
  {
    slug: "tunku-abdul-rahman-park",
    title: "Island Hop Tunku Abdul Rahman Park",
    category: "Islands & Diving",
    location: "Off Kota Kinabalu",
    elevationM: 5,
    difficulty: "Easy",
    duration: "Half day",
    image: "island-beach",
    featured: false,
    summary:
      "Five islands a 15-minute boat ride from downtown Kota Kinabalu, easy enough for a half-day without a tour.",
    content: `A short jetty ride from downtown Kota Kinabalu puts you on any of five islands making up Tunku Abdul Rahman Marine Park -- close enough that this is genuinely doable independently, without booking a packaged tour. Manukan has the most facilities and the most visitors; Sapi is quieter with decent snorkelling right off the beach; Mamutik is smaller again and the easiest to have mostly to yourself on a weekday.

Boats run regularly from Jesselton Point in the city -- buy an island-hopping pass covering two or three islands and set your own pace rather than joining a fixed group itinerary.`,
  },
  {
    slug: "mulu-caves-detour",
    title: "The Cave Systems Worth the Detour",
    category: "Adventure",
    location: "Gunung Mulu (Sarawak border region)",
    elevationM: 150,
    difficulty: "Moderate",
    duration: "3 days",
    image: "cave-system",
    featured: false,
    summary:
      "Technically over the Sarawak border, but the closest major airport is via Sabah -- and it's worth the detour.",
    content: `Gunung Mulu's cave systems sit just over the border in Sarawak, but for anyone routing through Sabah, it's a realistic and worthwhile add-on rather than a separate trip -- flights connect through Miri or Kota Kinabalu.

The Deer Cave chamber is vast enough to be genuinely disorienting, and the nightly exodus of several million wrinkle-lipped bats streaming out at dusk is one of the more overwhelming wildlife spectacles in the region, weather permitting. The show cave circuit is easy walking; the adventure caving routes (Clearwater, Racer Cave) need a guide and a real tolerance for tight, wet, dark spaces.`,
  },
];
