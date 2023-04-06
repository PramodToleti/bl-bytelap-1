let data = JSON.parse(localStorage.getItem("data"))

if (data === null) {
  data = [
    {
      id: 1,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",
      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Effective communication is an essential skill that can help us build strong relationships, advance professionally, and achieve personal growth. Here are 10 strategies that you can use to make your communication better: \n 1. Listen attentively and be present in the moment: One of the most important aspects of effective communication is listening. By actively listening and being present in the moment, you can better understand what others are saying and respond appropriately. \n 2. Avoid interrupting others when they are speaking: Interrupting others when they are speaking can be perceived as rude and disrespectful. Instead, allow them to finish their thoughts before responding. \n 3. Practice empathy and try to understand others’ perspectives: Empathy is the ability to understand and share the feelings of others. By putting yourself in others’ shoes, you can better understand their perspectives and communicate more effectively. \n 4. Be clear and concise in your own communication: When communicating with others, it's important to be clear and concise in your own communication. Use simple and straightforward language to convey your message effectively.\n 5. Use positive body language and eye contact to show engagement: Nonverbal communication plays a significant role in effective communication. By using positive body language and maintaining eye contact, you can showengagement and interest in what others are saying. \n 6. Avoid using jargon or technical language that may be unfamiliar to others: Jargon or technical language may be confusing and difficult for others to understand. Avoid using such language and instead use plain language that is easily understood. \n In conclusion, effective communication is an essential skill that can be developed and refined over time. By implementing these strategies, you can improve your communication skills and build stronger relationships with others. Remember, effective communication requires practice and patience, so keep working on it to become a better communicator.",
      category: "Career Guidence",
    },
    {
      id: 2,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },
    {
      id: 3,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },
    {
      id: 4,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },
    {
      id: 5,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },
    {
      id: 6,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },
    {
      id: 7,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },

    {
      id: 8,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },

    {
      id: 9,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },

    {
      id: 10,
      imageUrl:
        "https://res.cloudinary.com/dlpgowt5s/image/upload/v1678971110/WP-ERP_odzh6t.jpg",

      heading: "The Importance of Nonverbal Communication and How to Master It",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nunc nisl sit amet nisl.",
      category: "Career Guidence",
    },
  ]

  localStorage.setItem("data", JSON.stringify(data))
} else {
  data = JSON.parse(localStorage.getItem("data"))
}

export default data
