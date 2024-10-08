export const PRICE_LIST_QUERY = `
*[_type == "price-list"] {
    "price_list": price_list[] {
        "_key": _key,
        "course": course[$language],
        "duration": duration[$language],
        "hours_lessons": hours_lessons[$language],
        group_lessons,
        personal_lessons,
    }
}`;

export const OUR_TEAM_QUERY = `
*[_type == "our-team"] {
    "our_team": our_team[] {
        "_key": _key,
        "worker": worker[$language],
        "profession": profession[$language],
        "additional_detalis": additional_detalis[] {
            "detalis": detalis[$language]
        },
        worker_image,
    },
}`;

export const COURSES_QUERY = `
*[_type == "courses"] {
    "ogDescription": ogDescription[$language],
    "course_name": course_name[$language],
    "course_image": course_image,
    "slug": slug.current,
    "about_course": about_course {
        "title": title[$language],
        "about_content": about_content[$language]
    },
    course_process,
    our_day,
    keywords,
}`;

export const COURSE_SLUG_QUERY = `
*[_type == "courses" && slug.current == $slug] {
    "ogDescription": ogDescription[$language],
    "course_name": course_name[$language],
    "course_image": course_image,
    "slug": slug.current,
    "about_course": about_course {
        "title": title[$language],
        "about_content": about_content[$language]
    },
    course_process,
    our_day,
    keywords,
    ogImage,
}`;

export const COURSE_ID_QUERY = `
*[_type == "courses" && _id == $_id][0] {
    "ogDescription": ogDescription[$language],
    "course_name": course_name[$language],
    "course_image": course_image,
    "slug": slug.current,
    "about_course": about_course {
        "title": title[$language],
        "about_content": about_content[$language]
    },
    course_process,
    our_day,
    keywords,
}`;

export const LESSONS_ORDERS_QUERY = `
*[_type == "select-option"] {
    "courses_names": courses_names[] {
        "course_name": course_name[$language],
        "slug": slug.current,
    },
    "orders_names": orders_names[] {
        "order_name": order_name[$language],
        "slug": slug.current,
    },
}`;

export const CONTACT_US_QUERY = `
*[_type == "contact-us"] {
    "address": address[$language],
    "phone_numbers": phone_numbers[],
    "messengers": messengers[] {
        "_key": _key,
        "messenger_name": messenger_name,
        "messenger": messenger,
    },
    "social_links": social_links[] {
        "_key": _key,
        "social_name": social_name,
        "social_link": social_link,
    },
    email,
}`;

export const ABOUT_US_DETAILS_QUERY = `
*[_type == "about-us"] {
    "about_us": about_us {
        "title": title[$language],
        "content": content[$language],
        image,
    },
    "strengths": strengths[] {
        "_key": _key,
        "title": title[$language],
        "content": content[$language],
        showImage,
        image,
    },
    video,
}`;

export const HOME_DETALIS_QUERY = `
*[_type == "home"] {
    "about_course": about_course {
        "title": title[$language],
        "features": features[] {
            _key,
            "feature": feature[$language]
        },
        categories,
        image
    },
    "our_advantages": our_advantages[][$language],
    "content": content[$language],
}`;

export const SITE_META_QUERY = `
*[_type == "home"] {
    ogTitle,
    ogImage,
    keywords,
    "ogDescription": ogDescription[$language],
}`;

export const WEB_SITES_QUERY = 
`*[_type == "orders"] {
    "title": title[$language],
    "our_works": our_works[] {
        _key,
        "website_title": website_title[$language],
        "website_activity": website_activity[$language],
        web_site_url,
    },
}`;

export const PARTNERS_QUERY = 
`*[_type == "partners"] {
    _id,
    logo,
    "company_name": company_name[$language],
}`;