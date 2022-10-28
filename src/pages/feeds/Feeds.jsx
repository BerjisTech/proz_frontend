import React from 'react'
import Feed from '../../components/Feed'

const Feeds = () => {
    let random_tm_town_wiwo_feed_array = [
        {
            feed_icon: 'https://www.tm-town.com/images/avatars/1/1.jpg',
            feed_title: 'TM-Town',
            feed_description: 'TM-Town is a community of translators, interpreters, language service providers, and others involved in the translation, localization and interpreting industries.',
            feed_extra_text: 'TM-Town',
            feed_link: 'https://www.tm-town.com/'
        },
        {
            feed_icon: 'https://www.tm-town.com/images/avatars/1/1.jpg',
            feed_title: 'TM-Town',
            feed_description: 'TM-Town is a community of translators, interpreters, language service providers, and others involved in the translation, localization and interpreting industries.',
            feed_extra_text: 'TM-Town',
            feed_link: 'https://www.tm-town.com/'
        },
        {
            feed_icon: 'https://www.tm-town.com/images/tm-town-logo.png',
            feed_title: 'TM-Town',
            feed_description: 'TM-Town is a community of translators, interpreters, language service providers, and others involved in the translation, localization and interpreting industries.',
            feed_extra_text: 'TM-Town is a community of translators, interpreters, language service providers, and others involved in the translation, localization and interpreting industries.',
            feed_link: 'https://www.tm-town.com/'
        }
    ]
    
    return (
        <div>
            {/* Add 10 Proz.com feed */}
            {random_tm_town_wiwo_feed_array.map((feed, index) => (
                <Feed key={index} feed_icon={feed.feed_icon} feed_title={feed.feed_title} feed_description={feed.feed_description} feed_extra_text={feed.feed_extra_text} feed_link={feed.feed_link} />
            ))}
        </div>
    )
}

export default Feeds
