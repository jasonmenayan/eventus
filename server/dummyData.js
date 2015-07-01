"use strict";
// var User = require("./../server/User/userModel.js");
var Book = require("./../server/Book/bookModel.js");

module.exports = function() {

 function errorHandler(err) {
    if (err) {
      console.log("error saving to db");
      console.log(err);
    }
  }

  var book5 = new Book({
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    sample: "'Oh! She is the most beautiful creature I ever beheld! But there is one of her sisters sitting down just behind you, who is very pretty, and I dare say very agreeable. Do let me ask my partner to introduce you.'",
    amazonLink: "http://www.amazon.com/Pride-Prejudice-Dover-Thrift-Editions/dp/0486284735",
    image: "https://ia600802.us.archive.org/zipview.php?zip=/4/items/olcovers676/olcovers676-L.zip&file=6765535-L.jpg"
  });

  var book6 = new Book({
    title: "Alice's Adventures in Wonderland",
    author: "Lewis Carroll",
    genre: "Fiction",
    sample: "Just then she heard something splashing about in the pool a little way off, and she swam nearer to make out what it was: at first she thought it must be a walrus or hippopotamus, but then she remembered how small she was now, and she soon made out that it was only a mouse that had slipped in like herself.",
    amazonLink: "http://www.amazon.com/Alices-Adventures-Wonderland-Lewis-Carroll/dp/1503222683/ref=sr_1_2?s=books&ie=UTF8&qid=1435218587&sr=1-2&keywords=alice%27s+adventures+in+wonderland",
    image: "https://ia700804.us.archive.org/zipview.php?zip=/30/items/olcovers712/olcovers712-L.zip&file=7129396-L.jpg"
  });

  var book7 = new Book({
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Horror",
    sample: "'It is only shallow people who do not judge by appearances. The true mystery of the world is the visible, not the invisible.... Yes, Mr. Gray, the gods have been good to you.  But what the gods give they quickly take away.  You have only a few years in which to live really, perfectly, and fully.'",
    amazonLink: "http://www.amazon.com/Picture-Dorian-Dover-Thrift-Editions/dp/0486278077/ref=sr_1_1?s=books&ie=UTF8&qid=1435218802&sr=1-1&keywords=the+picture+of+dorian+gray&pebp=1435218804665&perid=1CTK2MH2MZ732RGA437Q",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/7/items/olcovers381/olcovers381-L.zip&file=3815998-L.jpg"
  });

  var book8 = new Book({
    title: "Dracula",
    author: "Bram Stroker",
    genre: "Horror",
    sample: "Hitherto I had noticed the backs of his hands as they lay on his knees in the firelight, and they had seemed rather white and fine; but seeing them now close to me, I could not but notice that they were rather coarse--broad, with squat fingers. Strange to say, there were hairs in the centre of the palm. The nails were long and fine, and cut to a sharp point.",
    amazonLink: "http://www.amazon.com/Dracula-Bram-Stoker/dp/1503261387/ref=sr_1_1?s=books&ie=UTF8&qid=1435218866&sr=1-1&keywords=dracula&pebp=1435218868922&perid=0STY5HMYFFXH29XD17WC",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/34/items/olcovers126/olcovers126-L.zip&file=1260405-L.jpg"
  });

  var book9 = new Book({
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    sample: "Holmes dashed into the crowd to protect the lady; but just as he reached her he gave a cry and dropped to the ground, with the blood running freely down his face.",
    amazonLink: "http://www.amazon.com/Adventures-Sherlock-Holmes-Arthur-Conan/dp/150860102X/ref=sr_1_2?s=books&ie=UTF8&qid=1435219095&sr=1-2&keywords=the+adventures+of+sherlock+holmes",
    image: "http://www.penguinbooksindia.com/sites/default/files/book_image/9780143068600.jpg"
  });

  var book10 = new Book({
    title: "Metamorphosis",
    author: "Franz Kafka",
    genre: "Modernism",
    sample: "Gregor soon had the opportunity to test the strength of his decisions, as early the next morning, almost before the night had ended, his sister, nearly fully dressed, opened the door from the front room and looked anxiously in.",
    amazonLink: "http://www.amazon.com/The-Metamorphosis-Franz-Kafka/dp/1494312697",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/34/items/olcovers126/olcovers126-L.zip&file=1260251-L.jpg"
  });

  var book11 = new Book({
    title: "Ulysses",
    author: "James Joyce",
    genre: "Modernism",
    sample: "He walked off quickly round the parapet. Stephen stood at his post, gazing over the calm sea towards the headland. Sea and headland now grew dim. Pulses were beating in his eyes, veiling their sight, and he felt the fever of his cheeks.",
    amazonLink: "http://www.amazon.com/Ulysses-James-Joyce/dp/1494405490/ref=sr_1_1?s=books&ie=UTF8&qid=1435219374&sr=1-1&keywords=ulysses&pebp=1435219376183&perid=0VQ77RPYQRHG24MAV1JV",
    image: "https://covers.openlibrary.org/b/id/7335145-L.jpg"
  });

  var book12 = new Book({
    title: "The Jungle Book",
    author: "Rudyard Kipling",
    genre: "Fiction",
    sample: "The whine had changed to a sort of humming purr that seemed to come from every quarter of the compass. It was the noise that bewilders woodcutters and gypsies sleeping in the open, and makes them run sometimes into the very mouth of the tiger.",
    amazonLink: "http://www.amazon.com/Jungle-Book-Rudyard-Kipling/dp/1503332543/ref=sr_1_1?s=books&ie=UTF8&qid=1435219586&sr=1-1&keywords=kipling+jungle+book&pebp=1435219587480&perid=0B71CG6TJNKXDJ57AHSS",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/24/items/olcovers202/olcovers202-L.zip&file=2026223-L.jpg"
  });

  var book13 = new Book({
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    genre: "Fiction",
    sample: "The young fellow by my side growled. The pilgrims murmured at my back. She looked at us all as if her life had depended upon the unswerving steadiness of her glance.",
    amazonLink: "http://www.amazon.com/Heart-Darkness-Joseph-Conrad/dp/1503275922/ref=sr_1_1?s=books&ie=UTF8&qid=1435219771&sr=1-1&keywords=heart+of+darkness&pebp=1435219772690&perid=0PFMXW2274RMS86F3QG9",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/4/items/olcovers302/olcovers302-L.zip&file=3025007-L.jpg"
  });

  var book14 = new Book({
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    genre: "Fiction",
    sample: "The wine was red wine, and had stained the ground of the narrow street in the suburb of Saint Antoine, in Paris, where it was spilled. It had stained many hands, too, and many faces, and many naked feet, and many wooden shoes.",
    amazonLink: "http://www.amazon.com/Tale-Cities-Dover-Thrift-Editions/dp/0486406512",
    image: "https://covers.openlibrary.org/b/id/7350922-L.jpg"
  });

  var book15 = new Book({
    title: "The Iliad",
    author: "Homer",
    genre: "Classic",
    sample: "The thunderer spoke, nor durst the queen reply; A reverent horror silenced all the sky. The feast disturb'd, with sorrow Vulcan saw His mother menaced, and the gods in awe;",
    amazonLink: "http://www.amazon.com/Iliad-Penguin-Classics-Deluxe-Edition/dp/0140275363",
    image: "https://ia800308.us.archive.org/zipview.php?zip=/34/items/olcovers40/olcovers40-L.zip&file=401279-L.jpg"
  });

  var book16 = new Book({
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "Historical Fiction",
    sample: "The Bishop stepped forward. At the sound which he made in walking, the old man turned his head, and his face expressed the sum total of the surprise which a man can still feel after a long life",
    amazonLink: "http://www.amazon.com/Miserables-Signet-Classics-Victor-Hugo/dp/045141943X/ref=sr_1_2?s=books&ie=UTF8&qid=1435311415&sr=1-2&keywords=les+mis",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/2/items/olcovers86/olcovers86-L.zip&file=869658-L.jpg"
  });

  var book17 = new Book({
    title: "Leaves of Grass",
    author: "Walt Whitman",
    genre: "Poetry",
    sample: "Come, said my soul,\nSuch verses for my Body let us write, (for we are one,)\nThat should I after return,",
    amazonLink: "http://www.amazon.com/Leaves-Grass-Original-Edition-Editions/dp/0486456765",
    image: "http://www.writeawriting.com/wp-content/uploads/2011/04/Why-did-wlat-whitman-write-Leaves-of-Grass.jpg"
  });

  var book18 = new Book({
    title: "Dubliners",
    author: "James Joyce",
    genre: "Historical Fiction",
    sample: "The next morning after breakfast I went down to look at the little house in Great Britain Street. It was an unassuming shop, registered under the vague name of Drapery. ",
    amazonLink: "http://www.amazon.com/Dubliners-Dover-Thrift-Editions-James/dp/0486268705/ref=sr_1_1?s=books&ie=UTF8&qid=1435311929&sr=1-1&keywords=dubliners&pebp=1435311931483&perid=11VTCD5CEAA95F0RKJ1K",
    image: "https://ia700800.us.archive.org/BookReader/BookReaderPreview.php?id=dublinerstextcri00joyc&itemPath=%2F10%2Fitems%2Fdublinerstextcri00joyc&server=ia700800.us.archive.org&page=cover_w500_h500.jpg"
  });

  var book19 = new Book({
    title: "Siddhartha",
    author: "Hermann Hesse",
    genre: "Fiction",
    sample: "The Brahman fell silent, and remained silent for so long that the stars in the small window wandered and changed their relative positions, 'ere the silence was broken.",
    amazonLink: "http://www.amazon.com/Siddhartha-Dover-Thrift-Editions-Hermann/dp/0486406539",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/4/items/olcovers645/olcovers645-L.zip&file=6456720-L.jpg"
  });

  var book20 = new Book({
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    genre: "Fiction",
    sample: "The new arrangement was quite to my liking. The whole schooner had been overhauled; six berths had been made astern out of what had been the after-part of the main hold; and this set of cabins was only joined to the galley and forecastle by a sparred passage on the port side.",
    amazonLink: "http://www.amazon.com/Treasure-Island-Dover-Thrift-Editions/dp/0486275590",
    image: "https://ia801405.us.archive.org/zipview.php?zip=/29/items/olcovers591/olcovers591-L.zip&file=5913855-L.jpg"
  });

  var book21 = new Book({
    title: "The Prince",
    author: "Nicolo Machiavelli",
    genre: "Classic",
    sample: "In this way you have enemies in all those whom you have injured in seizing that principality, and you are not able to keep those friends who put you there because of your not being able to satisfy them in the way they expected, and you cannot take strong measures against them, feeling bound to them.",
    amazonLink: "http://www.amazon.com/Prince-Bantam-Classics-Niccolo-Machiavelli/dp/0553212788",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/23/items/olcovers663/olcovers663-L.zip&file=<6636558-L.jpg"
  });

  var book22 = new Book({
    title: "Moby Dick; or The Whale",
    author: "Herman Melville",
    genre: "Fiction",
    sample: "Gaining the more open water, the bracing breeze waxed fresh; the little Moss tossed the quick foam from her bows, as a young colt his snortings.",
    amazonLink: "http://www.amazon.com/Moby-Dick-Bantam-Classics-Herman-Melville/dp/0553213113",
    image: "https://ia700602.us.archive.org/zipview.php?zip=/34/items/olcovers335/olcovers335-L.zip&file=3350964-L.jpg"
  });

  var book23 = new Book({
    title: "Emma",
    author: "Jane Austen",
    genre: "Classic",
    sample: "Mr. Elton was the very person fixed on by Emma for driving the young farmer out of Harriet's head. She thought it would be an excellent match; and only too palpably desirable, natural, and probable, for her to have much merit in planning it.",
    amazonLink: "http://www.amazon.com/Emma-Dover-Thrift-Editions-Austen/dp/0486406482",
    image: "https://ia800305.us.archive.org/zipview.php?zip=/20/items/olcovers90/olcovers90-L.zip&file=902002-L.jpg"
  });

  var book24 = new Book({
    title: "Frankenstein",
    author: "Mary Wollstonecraft Shelley",
    genre: "Horror",
    sample: "This state of mind preyed upon my health, which had perhaps never entirely recovered from the first shock it had sustained.  I shunned the face of man; all sound of joy or complacency was torture to me; solitude was my only consolation--deep, dark, deathlike solitude.",
    amazonLink: "http://www.amazon.com/Frankenstein-Mary-Shelley/dp/0486282112/ref=sr_1_1?s=books&ie=UTF8&qid=1435366767&sr=1-1&keywords=frankenstein&pebp=1435366768346&perid=09VPD1TTXT3JYNZZNQ1V",
    image: "https://ia700809.us.archive.org/zipview.php?zip=/28/items/olcovers461/olcovers461-L.zip&file=4616518-L.jpg"
  });

  var book25 = new Book({
    title: "The Legend of Sleepy Hollow",
    author: "Washington Irving",
    genre: "Horror",
    sample: "As Ichabod approached this fearful tree, he began to whistle; he thought his whistle was answered; it was but a blast sweeping sharply through the dry branches.",
    amazonLink: "http://www.amazon.com/Legend-Sleepy-Hollow-Stories-Editions/dp/0486466582/ref=sr_1_3?s=books&ie=UTF8&qid=1435367014&sr=1-3&keywords=sleepy+hollow",
    image: "https://ia700804.us.archive.org/zipview.php?zip=/5/items/olcovers61/olcovers61-L.zip&file=615970-L.jpg"
  });

  var book26 = new Book({
    title: "Around the World in 80 Days",
    author: "Jules Verne",
    genre: "Fiction",
    sample: "Two men were promenading up and down the wharves, among the crowd of natives and strangers who were sojourning at this once straggling village--now, thanks to the enterprise of M. Lesseps, a fast-growing town.",
    amazonLink: "http://www.amazon.com/Around-World-Days-Jules-Verne/dp/1503215156/ref=sr_1_1?s=books&ie=UTF8&qid=1435367180&sr=1-1&keywords=around+the+world+in+80+days&pebp=1435367181359&perid=19KKR16S36CESRW037F1",
    image: "https://ia700806.us.archive.org/zipview.php?zip=/8/items/olcovers95/olcovers95-L.zip&file=951817-L.jpg"
  });

  var book27 = new Book({
    title: "The Republic",
    author: "Plato",
    genre: "Classic",
    sample: "Of course this was not the original assertion, nor is the new interpretation accepted by Thrasymachus himself. But Socrates is not disposed to quarrel about words, if, as he significantly insinuates, his adversary has changed his mind.",
    amazonLink: "http://www.amazon.com/Republic-Dover-Thrift-Editions/dp/0486411214/ref=sr_1_1?s=books&ie=UTF8&qid=1435367306&sr=1-1&keywords=the+republic&pebp=1435367308007&perid=08PZ1YRCBZH16VPZMQKS",
    image: "https://ia802606.us.archive.org/zipview.php?zip=/11/items/olcovers243/olcovers243-L.zip&file=2435052-L.jpg"
  });

  var book28 = new Book({
    title: "Oliver Twist",
    author: "Charles Dickens",
    genre: "Fiction",
    sample: "The room in which the boys were fed, was a large stone hall, with a copper at one end: out of which the master, dressed in an apron for the purpose, and assisted by one or two women, ladled the gruel at mealtimes.",
    amazonLink: "http://www.amazon.com/Oliver-Twist-Dover-Thrift-Editions/dp/0486424537/ref=sr_1_1?s=books&ie=UTF8&qid=1435367444&sr=1-1&keywords=oliver+twist",
    image: "https://ia700800.us.archive.org/zipview.php?zip=/7/items/olcovers646/olcovers646-L.zip&file=6460018-L.jpg"
  });

  var book29 = new Book({
    title: "The Time Machine",
    author: "H. G. Wells",
    genre: "Fiction",
    sample: "The thing the Time Traveller held in his hand was a glittering metallic framework, scarcely larger than a small clock, and very delicately made. There was ivory in it, and some transparent crystalline substance.",
    amazonLink: "http://www.amazon.com/Time-Machine-H-G-Wells/dp/1453767525/ref=sr_1_1?s=books&ie=UTF8&qid=1435367561&sr=1-1&keywords=time+machine",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/34/items/olcovers27/olcovers27-L.zip&file=277837-L.jpg"
  });

  var book30 = new Book({
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    genre: "Fiction",
    sample: "I stored the boat with the carcases of a hundred oxen, and three hundred sheep, with bread and drink proportionable, and as much meat ready dressed as four hundred cooks could provide.",
    amazonLink: "http://www.amazon.com/Gullivers-Travels-Dover-Thrift-Editions/dp/0486292738/ref=sr_1_1?s=books&ie=UTF8&qid=1435367785&sr=1-1&keywords=gullivers+travels",
    image: "https://ia700807.us.archive.org/zipview.php?zip=/23/items/olcovers83/olcovers83-L.zip&file=834685-L.jpg"
  });

  var book31 = new Book({
    title: "Great Expectations",
    author: "Charles Dickens",
    genre: "Fiction",
    sample: "Some medical beast had revived Tar-water in those days as a fine medicine, and Mrs. Joe always kept a supply of it in the cupboard; having a belief in its virtues correspondent to its nastiness.",
    amazonLink: "http://www.amazon.com/Great-Expectations-Charles-Dickens/dp/1503275183/ref=sr_1_1?s=books&ie=UTF8&qid=1435367900&sr=1-1&keywords=great+expectations&pebp=1435367904783&perid=16D1KDRHRYC9349AQ97J",
    image: "https://ia700805.us.archive.org/zipview.php?zip=/16/items/olcovers10/olcovers10-L.zip&file=106184-L.jpg"
  });

  var book32 = new Book({
    title: "Twelve Years a Slave",
    author: "Solomon Northup",
    genre: "Historical Fiction",
    sample: "About midnight following, the cell door opened, and Burch and Radburn entered, with lanterns in their hands. Burch, with an oath, ordered us to roll up our blankets without delay, and get ready to go on board the boat.",
    amazonLink: "http://www.amazon.com/12-Years-Slave-Solomon-Northup/dp/1631680021/ref=sr_1_1?s=books&ie=UTF8&qid=1435368023&sr=1-1&keywords=twelve+years+a+slave",
    image: "http://ecx.images-amazon.com/images/I/71BGwovWcaL.jpg"
  });

  var book33 = new Book({
    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    author: "Robert Louis Stevenson",
    genre: "Fiction",
    sample: "But Lanyon's face changed, and he held up a trembling hand. 'I wish to see or hear no more of Dr. Jekyll,' he said in a loud, unsteady voice.",
    amazonLink: "http://www.amazon.com/Strange-Jekyll-Dover-Thrift-Editions/dp/0486266885/ref=sr_1_1?s=books&ie=UTF8&qid=1435368215&sr=1-1&keywords=jekyll+and+hyde&pebp=1435368216935&perid=0Z68X775NPDA0Z50461C",
    image: "https://ia800308.us.archive.org/zipview.php?zip=/34/items/olcovers40/olcovers40-L.zip&file=406111-L.jpg"
  });

  var book34 = new Book({
    title: "The Life and Adventures of Robinson Crusoe",
    author: "Daniel Defoe",
    genre: "Fiction",
    sample: "My first contrivance was to make a pretence to speak to this Moor, to get something for our subsistence on board; for I told him we must not presume to eat of our patron’s bread.",
    amazonLink: "http://www.amazon.com/Robinson-Crusoe-Daniel-Defoe/dp/150329238X/ref=sr_1_1?s=books&ie=UTF8&qid=1435368328&sr=1-1&keywords=robinson+crusoe",
    image: "https://ia700801.us.archive.org/zipview.php?zip=/12/items/olcovers36/olcovers36-L.zip&file=368541-L.jpg"
  });

  var book35 = new Book({
    title: "The Story of My Life",
    author: "Hellen Keller",
    genre: "Non-fiction",
    sample: "I was in the North, enjoying the last beautiful days of the summer of 1896, when I heard the news of my father's death. He had had a short illness, there had been a brief time of acute suffering, then all was over. This was my first great sorrow--my first personal experience with death.",
    amazonLink: "http://www.amazon.com/Helen-Keller-Story-Thrift-Editions/dp/0486292495/ref=sr_1_1?s=books&ie=UTF8&qid=1435368514&sr=1-1&keywords=story+of+my+life+helen+keller",
    image: "https://d1bmgt8dd7tuji.cloudfront.net/media/sapnaonline.com/images/products/medium/ebk0318506.20130223172138.jpg"
  });

  var book36 = new Book({
    title: "Autobiography of Benjamin Franklin",
    author: "Benjamin Franklin",
    genre: "Non-fiction",
    sample: "This obscure family of ours was early in the Reformation, and continued Protestants through the reign of Queen Mary, when they were sometimes in danger of trouble on account of their zeal against popery.",
    amazonLink: "http://www.amazon.com/Autobiography-Benjamin-Franklin-Thrift-Editions/dp/0486290735/ref=sr_1_3?s=books&ie=UTF8&qid=1435368683&sr=1-3&keywords=benjamin+franklin",
    image: "https://ia700802.us.archive.org/zipview.php?zip=/20/items/olcovers667/olcovers667-L.zip&file=6677528-L.jpg"
  });

  var book37 = new Book({
    title: "Narrative of the Life of Frederick Douglass",
    author: "Frederick Douglass",
    genre: "Non-fiction",
    sample: "My father was a white man. He was admitted to be such by all I ever heard speak of my parentage. The opinion was also whispered that my master was my father; but of the correctness of this opinion, I know nothing; the means of knowing was withheld from me.",
    amazonLink: "http://www.amazon.com/Narrative-Life-Frederick-Douglass/dp/0486284999/ref=sr_1_1?s=books&ie=UTF8&qid=1435368855&sr=1-1&keywords=frederick+douglass",
    image: "http://ebooks.cambridge.org/content/978/05/1192/041/7/9780511920417i.jpg"
  });

  var book38 = new Book({
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Fiction",
    sample: "The families of the Levins and the Shtcherbatskys were old, noble Moscow families, and had always been on intimate and friendly terms.",
    amazonLink: "http://www.amazon.com/Anna-Karenina-Modern-Library-Classics/dp/067978330X/ref=sr_1_1?s=books&ie=UTF8&qid=1435369022&sr=1-1&keywords=anna+karenina",
    image: "https://openlibrary.org/books/OL5615955M/Anna_Karenina"
  });

  var book39 = new Book({
    title: " L. M. Montgomery",
    author: "Anne of Green Gables",
    genre: "Fiction",
    sample: "That was not what Mrs. Spencer had said; neither had the child tumbled out of the buggy nor had Matthew done anything astonishing. They had simply rounded a curve in the road and found themselves in the 'Avenue.'",
    amazonLink: "http://www.amazon.com/Anne-Green-Gables-L-M-Montgomery/dp/1503214133/ref=sr_1_1?s=books&ie=UTF8&qid=1435369194&sr=1-1&keywords=anne+of+green+gables&pebp=1435369195241&perid=1FJQ5T0GE5NJQ4REFM6D",
    image: "https://lh3.ggpht.com/r8U5u5DIoMibwxKF0SG46v0LdFxBYeghNW_dHroe7AEIEYFyUMxGty9coFHDg2ARdAwl=h900"
  });

  var book40 = new Book({
    title: "David Copperfield",
    author: "Charles Dickens",
    genre: "Fiction",
    sample: "After dinner, when we were sitting by the fire, and I was meditating an escape to Peggotty without having the hardihood to slip away, lest it should offend the master of the house, a coach drove up to the garden-gate and he went out to receive the visitor.",
    amazonLink: "http://www.amazon.com/Copperfield-Penguin-Classics-Charles-Dickens/dp/0140439447/ref=sr_1_1?s=books&ie=UTF8&qid=1435369502&sr=1-1&keywords=david+copperfield&pebp=1435369504269&perid=1H3P76BJJ85CGZ4EACCM",
    image: "https://ia700806.us.archive.org/zipview.php?zip=/31/items/olcovers11/olcovers11-L.zip&file=118268-L.jpg"
  });

  var book41 = new Book({
    title: "The King in Yellow",
    author: "Robert W. Chambers",
    genre: "Mystery",
    sample: "I do not deny that he was eccentric; the mania he had for keeping that cat and teasing her until she flew at his face like a demon, was certainly eccentric.",
    amazonLink: "http://www.amazon.com/King-Yellow-Robert-W-Chambers/dp/1503364127/ref=sr_1_1?s=books&ie=UTF8&qid=1435369679&sr=1-1&keywords=king+in+yellow",
    image: "https://ia700809.us.archive.org/zipview.php?zip=/25/items/olcovers76/olcovers76-L.zip&file=767627-L.jpg"
  });

  var book42 = new Book({
    title: "The Wonderful Wizard of Oz",
    author: "L. Frank Baum",
    genre: "Fiction",
    sample: "So they oiled his legs until he could move them freely; and he thanked them again and again for his release, for he seemed a very polite creature, and very grateful.",
    amazonLink: "http://www.amazon.com/Wonderful-Wizard-Oz-Frank-Baum/dp/1505280958/ref=sr_1_1?s=books&ie=UTF8&qid=1435369790&sr=1-1&keywords=wonderful+wizard+of+oz&pebp=1435369792594&perid=1D2D3T10WXBV9JMA7Z8X",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Wizard_title_page.jpg/200px-Wizard_title_page.jpg"
  });

  var book43 = new Book({
    title: "The War of the Worlds",
    author: "H. G. Wells",
    genre: "Fiction",
    sample: "The storm had left the sky clear, and over the smoke of the burning land the little fading pinpoint of Mars was dropping into the west, when a soldier came into my garden.",
    amazonLink: "http://www.amazon.com/War-Worlds-H-G-Wells/dp/1505260795/ref=sr_1_2?s=books&ie=UTF8&qid=1435369943&sr=1-2&keywords=war+of+the+worlds",
    image: "https://ia600805.us.archive.org/zipview.php?zip=/16/items/olcovers10/olcovers10-L.zip&file=109079-L.jpg"
  });

  var book44 = new Book({
    title: "Relativity: The Special and General Theory",
    author: "Albert Einstein",
    genre: "Non-fiction",
    sample: "In order to have a complete description of the motion, we must specify how the body alters its position with time ; i.e. for every point on the trajectory it must be stated at what time the body is situated there.",
    amazonLink: "http://www.amazon.com/Relativity-Special-General-Albert-Einstein/dp/1619491508/ref=sr_1_1?s=books&ie=UTF8&qid=1435370121&sr=1-1&keywords=relativity&pebp=1435370122888&perid=1XCBZ7J2G9E12X2ARCJH",
    image: "https://ia800307.us.archive.org/zipview.php?zip=/4/items/olcovers643/olcovers643-L.zip&file=6438297-L.jpg"
  });

  var book45 = new Book({
    title: "Paradise Lost",
    author: "John Milton",
    genre: "Classic",
    sample: " To whom the Goblin full of wrauth reply'd,\nArt thou that Traitor Angel, art thou hee,\nWho first broke peace in Heav'n and Faith, till then\nUnbrok'n, and in proud rebellious Arms\n",
    amazonLink: "http://www.amazon.com/Paradise-Lost-Dover-Thrift-Editions/dp/048644287X/ref=sr_1_1?s=books&ie=UTF8&qid=1435370294&sr=1-1&keywords=paradise+lost",
    image: "https://lh5.ggpht.com/8rHODTHi3lLyWughdbv_YOmnnErB4-kvhd9ParFvDVCrOqcMtTpi7OE_9snfnMbgiNo=h900"
  });

  var book46 = new Book({
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    sample: "That day Nicholas Rostov received a letter from Boris, telling him that the Ismaylov regiment was quartered for the night ten miles from Olmutz and that he wanted to see him as he had a letter and money for him.",
    amazonLink: "http://www.amazon.com/War-Peace-Vintage-Classics-Tolstoy/dp/1400079985/ref=sr_1_1?s=books&ie=UTF8&qid=1435370537&sr=1-1&keywords=war+and+peace&pebp=1435370538973&perid=0YEN05SBQQ3VWEJY6KGA",
    image: "http://ecx.images-amazon.com/images/I/51qFi0rYw7L._SY344_BO1,204,203,200_.jpg"
  });

  var book47 = new Book({
    title: "The Works of Edgar Allan Poe",
    author: "Edgar Allen Poe",
    genre: "Horror",
    sample: "April 4th. Arose in good health and spirits, and was astonished at the singular change which had taken place in the appearance of the sea. It had lost, in a great measure, the deep tint of blue it had hitherto worn, being now of a grayish-white, and of a lustre dazzling to the eye.",
    amazonLink: "http://www.amazon.com/Works-Edgar-Allen-Poe/dp/1466307358/ref=sr_1_1?s=books&ie=UTF8&qid=1435370687&sr=1-1&keywords=works+of+edgar+allen+poe+volume+1",
    image: "http://ecx.images-amazon.com/images/I/41DfOpbydOL._SY344_BO1,204,203,200_.jpg"
  });

  var book48 = new Book({
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoyevsky",
    genre: "Historical Fiction",
    sample: "Lise had in fact been occupied in mocking at him all the time. She had noticed before that Alyosha was shy and tried not to look at her, and she found this extremely amusing.",
    amazonLink: "http://www.amazon.com/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0374528373/ref=sr_1_1?s=books&ie=UTF8&qid=1435370943&sr=1-1&keywords=brothers+karamazov&pebp=1435370945542&perid=07VA2JXGJ4KEE5FQCHFD",
    image: "http://img1.imagesbn.com/p/2940012146410_p0_v1_s260x420.JPG"
  });

  var book49 = new Book({
    title: "Pygmalion",
    author: "George Bernard Shaw",
    genre: "Classic",
    sample: "LIZA. No: I don't want no gold and no diamonds. I'm a good girl, I am. [She sits down again, with an attempt at dignity].",
    amazonLink: "http://www.amazon.com/Pygmalion-George-Bernard-Shaw/dp/1503290905/ref=sr_1_1?s=books&ie=UTF8&qid=1435371103&sr=1-1&keywords=pygmalion&pebp=1435371106080&perid=1TRMY5P6ZBH622T5NRXD",
    image: "http://www.allyoucanbooks.com/sites/default/files/imagecache/book_cover_medium/ebook-cover/Pygmalion-by-George-Bernard-Shaw.jpg"
  });

  var book50 = new Book({
    title: "A Study in Scarlett",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    sample: "All these details I observed afterwards. At present my attention was centred upon the single grim motionless figure which lay stretched upon the boards, with vacant sightless eyes staring up at the discoloured ceiling.",
    amazonLink: "http://www.amazon.com/Study-Scarlet-Arthur-Conan-Doyle/dp/1599866749/ref=sr_1_1?s=books&ie=UTF8&qid=1435371226&sr=1-1&keywords=a+study+in+scarlet&pebp=1435371228143&perid=1S5A9YAERH005DM6ATQV",
    image: "http://one-elevenbooks.com/wp-content/uploads/2013/05/sherlock-_-a-study-in-scarlet.jpg"
  });

    //TODO: get this to work with a loop instead of hard coding like below
    // for(var i = 5; i < 50; i++){
    //   ("book" + i).save(errorHandler);
    // }
    book5.save(errorHandler);
    book6.save(errorHandler);
    book7.save(errorHandler);
    book8.save(errorHandler);
    book9.save(errorHandler);
    book10.save(errorHandler);
    book11.save(errorHandler);
    book12.save(errorHandler);
    book13.save(errorHandler);
    book14.save(errorHandler);
    book15.save(errorHandler);
    book16.save(errorHandler);
    book17.save(errorHandler);
    book18.save(errorHandler);
    book19.save(errorHandler);
    book20.save(errorHandler);
    book21.save(errorHandler);
    book22.save(errorHandler);
    book23.save(errorHandler);
    book24.save(errorHandler);
    book25.save(errorHandler);
    book26.save(errorHandler);
    book27.save(errorHandler);
    book28.save(errorHandler);
    book29.save(errorHandler);
    book30.save(errorHandler);
    book31.save(errorHandler);
    book32.save(errorHandler);
    book33.save(errorHandler);
    book34.save(errorHandler);
    book35.save(errorHandler);
    book36.save(errorHandler);
    book37.save(errorHandler);
    book38.save(errorHandler);
    book39.save(errorHandler);
    book40.save(errorHandler);
    book41.save(errorHandler);
    book42.save(errorHandler);
    book43.save(errorHandler);
    book44.save(errorHandler);
    book45.save(errorHandler);
    book46.save(errorHandler);
    book47.save(errorHandler);
    book48.save(errorHandler);
    book49.save(errorHandler);
    book50.save(errorHandler);

};
