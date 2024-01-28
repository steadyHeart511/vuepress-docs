# cname.sh
# 配置自定义域名时，如果想要实现自动化部署就得编写该文件
# !/usr/bin/ernv sh
set -e
echo '你的域名地址' > docs/.vuepress/dist/CNAME