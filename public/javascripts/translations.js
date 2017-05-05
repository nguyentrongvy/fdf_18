I18n.translations || (I18n.translations = {});
I18n.translations["en"] = I18n.extend((I18n.translations["en"] || {}), {"about":"About","action":"Action","activerecord":{"errors":{"messages":{"record_invalid":"Validation failed: %{errors}","restrict_dependent_destroy":{"has_many":"Cannot delete record because dependent %{record} exist","has_one":"Cannot delete record because a dependent %{record} exists"}}}},"add_cart":"Add to your cart","add_category":"Add new category","add_image":"Add Image","add_items":"Add more items?","add_product":"Add new product","address":"Address:","available_image":"Available Image (tick box if you want to delete image) :","categories":{"create":{"success":"New category has been created!"},"destroy":{"can_not_delete":"There are some products in this category, permission is denied!","success":"Category has been deleted!"},"edit":{"edit":"Edit Category"},"form":{"create":"Submit"},"new":{"create":"Create new category"},"show":{"none":"There is no category that matches this id!"},"update":{"success":"Category's information has been updated!"}},"category":"Category:","category_parent":"Category's Parent:","change":"Change","comment":"comments","comments":{"add_comment":{"cancel":"Cancel","comment":"Comment","rating_comment":"Add your comment","write_comment":"What are you thinking ?"},"create":{"can't_comment":"Can't comment, please try again !","commented":"Commented !"}},"confirm":"Are You Sure?","confirm_password":"Password Confirmation","contact":"Contact","continue":"Continue Shopping","date":{"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"formats":{"default":"%Y-%m-%d","long":"%B %d, %Y","short":"%b %d"},"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"order":["year","month","day"]},"datetime":{"distance_in_words":{"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"},"half_a_minute":"half a minute","less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"x_days":{"one":"1 day","other":"%{count} days"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"x_months":{"one":"1 month","other":"%{count} months"},"x_seconds":{"one":"1 second","other":"%{count} seconds"}},"prompts":{"day":"Day","hour":"Hour","minute":"Minute","month":"Month","second":"Seconds","year":"Year"}},"delete":" Delete","description":"Description:","email":"Email:","errors":{"connection_refused":"Oops! Failed to connect to the Web Console middleware.\nPlease make sure a rails development server is running.\n","format":"%{attribute} %{message}","messages":{"accepted":"must be accepted","blank":"can't be blank","carrierwave_download_error":"could not be downloaded","carrierwave_integrity_error":"is not of an allowed file type","carrierwave_processing_error":"failed to be processed","confirmation":"doesn't match %{attribute}","empty":"can't be empty","equal_to":"must be equal to %{count}","even":"must be even","exclusion":"is reserved","extension_black_list_error":"You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}","extension_white_list_error":"You are not allowed to upload %{extension} files, allowed types: %{allowed_types}","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","inclusion":"is not included in the list","invalid":"is invalid","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","mime_types_processing_error":"Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}","mini_magick_processing_error":"Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}","model_invalid":"Validation failed: %{errors}","not_a_number":"is not a number","not_an_integer":"must be an integer","odd":"must be odd","other_than":"must be other than %{count}","present":"must be blank","required":"must exist","rmagick_processing_error":"Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}","taken":"has already been taken","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"}},"unacceptable_request":"A supported version is expected in the Accept header.\n","unavailable_session":"Session %{id} is no longer available in memory.\n\nIf you happen to run on a multi-process server (like Unicorn or Puma) the process\nthis request hit doesn't store %{id} in memory. Consider turning the number of\nprocesses/workers to one (1) or using a different server in development.\n"},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","submit":"Save %{model}","update":"Update %{model}"}},"home":"Home","home_pages":{"about":{"about":"About"}},"javascript":{"error_comment":"\n Error, please try again !","error_rating":"\n Error, please try again !","not_correct_user":"Nor correct user","please_enter":"Please enter first !"},"layouts":{"application":{"food_drink":"Food and Drink"},"footer":{"author":"This is project 1 of Nguyen Van Hoan itern and Nguyen Minh Tuan new dev.","company_fax":"Fax: (000) 000 00 00 0","company_phone":"Phone: (00) 222 666 444","contact":"Contact","copy_right":"2013 All Rights Reseverd Designed by","drink_for_everybody":"And Food for everybody","drink_for_everyone":"Drink for everyone","email":"Email:","food_drink":"Food and Drink","home":"Home","keangnam_tower_13th_floor":"Keangnam Tower 13th floor,","nam_tu_liem_district_Ha Noi":"Nam Tu Liem District, Ha Noi, Viet Nam","our_address":"Our Address","privacy_policy":"Privacy Policy","terms_of_user":"Terms of use","viet_nam":"Viet Nam"}},"log_in":"Please log in first!","login":"Log in","logout":"Log out","modify":" Modify","name":"Name:","new_category":"Need more category?","newuser":"New User?","none":"There is no product that matches this id!","not_admin":"You do not have permission to access this URL!","number":{"currency":{"format":{"delimiter":",","format":"%u%n","precision":2,"separator":".","significant":false,"strip_insignificant_zeros":false,"unit":"$"}},"format":{"delimiter":",","precision":3,"separator":".","significant":false,"strip_insignificant_zeros":false},"human":{"decimal_units":{"format":"%n %u","units":{"billion":"Billion","million":"Million","quadrillion":"Quadrillion","thousand":"Thousand","trillion":"Trillion","unit":""}},"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"eb":"EB","gb":"GB","kb":"KB","mb":"MB","pb":"PB","tb":"TB"}}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}}},"password":"Password","phone":"Phone:","price":"Price:","products":{"create":{"product_success":"New product has been created!"},"destroy":{"success":"Image has been deleted!"},"edit":{"edit":"Edit Product"},"form":{"create":"Submit"},"index":{"suggest":"Suggest"},"new":{"create":"Create new product"},"show":{"ago":"ago","by_admin":"by Admin","category":"Category","comment_title":"Comments","comments":"comments","point":"point","tags":"Tags"},"update":{"success":"Product has been updated!"}},"profile":"Profile","quantity":"Quantity:","rating_now":"Rating now?","registration":"Registration","remove":"Remove","sessions":{"create":{"invalid":"Wrong email or password. Please try again!","login_success":"Welcome back, "},"new":{"login":"Log in","remember_me":"Remember me on this computer"}},"shared":{"error_messages":{"errors":"The form contains"}},"shopping_cart":"Shopping Cart","signup":"Sign Up Now!","support":{"array":{"last_word_connector":", and ","two_words_connector":" and ","words_connector":", "}},"time":{"am":"am","formats":{"default":"%a, %d %b %Y %H:%M:%S %z","long":"%B %d, %Y %H:%M","short":"%d %b %H:%M"},"pm":"pm"},"total_price":"Total Price: ","update_cart":"Update Cart","users":{"create":{"welcome_user":"Welcome To Framgia Food and Drink"},"edit":{"can_not":"You don't have permission to access this page!","edit_profile":"Edit Profile","save":"Save Changes","update_profile":"Update Profile"},"new":{"create":"Sign Up","signup":"Sign Up"},"show":{"address":"Address: ","email":"Email: ","none":"There is no user that matches this id!","phone":"Phone number: "},"update":{"success":"Your profile has been updated!"}},"will_paginate":{"next_label":"Next \u0026#8594;","page_entries_info":{"multi_page":"Displaying %{model} %{from} - %{to} of %{count} in total","multi_page_html":"Displaying %{model} \u003cb\u003e%{from}\u0026nbsp;-\u0026nbsp;%{to}\u003c/b\u003e of \u003cb\u003e%{count}\u003c/b\u003e in total","single_page":{"one":"Displaying 1 %{model}","other":"Displaying all %{count} %{model}","zero":"No %{model} found"},"single_page_html":{"one":"Displaying \u003cb\u003e1\u003c/b\u003e %{model}","other":"Displaying \u003cb\u003eall\u0026nbsp;%{count}\u003c/b\u003e %{model}","zero":"No %{model} found"}},"page_gap":"\u0026hellip;","previous_label":"\u0026#8592; Previous"},"your_cart":"Your Cart","your_profile":"Profile Detail"});
