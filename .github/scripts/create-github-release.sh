curl -v -s \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Content-Type:application/json" \
  "https://api.github.com/repos/${GITHUB_REPOSITORY}/releases" \
  -d "{ \
    \"tag_name\": \"${{needs.get_package_version.outputs.git_tag_name}}\", \
    \"target_commitish\": \"${GITHUB_SHA}\", \
    \"name\": \"${{needs.get_package_version.outputs.git_tag_name}}\", \
    \"body\": \"Release version ${{needs.get_package_version.outputs.git_tag_name}}\", \
    \"draft\": false, \
    \"prerelease\": false \
  }"
