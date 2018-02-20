<h1>Code Tests</h1>

Important Finds = Nice To Keep

# To untrack DS_Store from git
find. - name.DS_Store - print0 | xargs - 0 git rm - f--ignore - unmatch
# To remove file from git and keep it on Disk
git rm -r --cached path_to_your_folder/
# Automatically get rid of remote branches that no longer exist on the remote.
git fetch --prune
