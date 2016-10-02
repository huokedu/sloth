## Component Hierarchy

**AuthFormContainer**
- AuthForm

**ChannelContainer**
- Sidebar
- Channel
- Search

**DetailContainer**
- Detail

**ProfileContainer**
- Profile

**SearchResultsContainer**
- SearchResults

**NewChannel**

**ChannelSearchContainer**
- ChannelSearch
- SearchResults

## Routes

|    Path    |      Component      |
|------------|---------------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/messages/:channelName" | "ChannelContainer" |
| "/messages/:channelName/detail" | "DetailContainer" |
| "/messages/:channelName/team/:username" | "ProfileContainer" |
| "/messages/:channelName/search/:query" | "SearchResultsContainer" |
| "/new-channel" | "NewChannel" |
| "/search-channels" | "ChannelSearchContainer" |
