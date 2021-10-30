import tweepy

consumer_key = 'onjviw5q5FbMo2vf3jUI7uuYY'
consumer_secret = 'hntyM0HLSLXLLgaNBZu03eavFLkFm6jm5VYO3fLS6ez4AsDgdY'
key = '1453424121568808967-FKgK5B1X735UKKKebx7tHvf9HZS8L2'
secret = '0y52zkswuoJQEx4DnyH8iCkhs6iLLY99307Ut8KwzXgo1'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(key, secret)
api = tweepy.API(auth)

FILE_NAME = 'Last_Seen.txt'

def read_last_seen(FILE_NAME):
    file_read = open(FILE_NAME, 'r')
    last_seen_id = int(file_read.read().strip())
    file_read.close()
    return last_seen_id

def store_last_seen(FILE_NAME, last_seen_id):
    file_write = open(FILE_NAME, 'w')
    file_write.write(str(last_seen_id))
    file_write.close()
    return

tweets = api.mentions_timeline('1453783726362701840')
for tweet in tweets:
    print(str(tweet.id) + ' - ' + tweet.text)
        
    # if '#randomtweet' in tweet.text.lower():
    #     print("New Tweet Found!")