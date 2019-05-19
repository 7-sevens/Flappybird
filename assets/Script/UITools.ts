
export const UITools = {

    /**
     * @brief 查找子节点
     * @param root_node 父级节点
     * @param name 子节点名称
     * @return 子节点对象 
     */
    seekChild: function(root_node: cc.Node, name: string): cc.Node
    {
        if(root_node.name == name)
            return root_node;

        let childCount = root_node.childrenCount;
        for (let i = 0; i < childCount; i++)
        {
            let v = this.seekChild(root_node.children[i], name);
            if (v != null)
                return v;
        }

        return null;
    },

    /**
     * @brief 名称格式化
     * @param name 名称
     * @param maxLen 最大长度
     * @return 格式化之后到名称
     */
    formatName: function(name: string, maxLen: number = 6): string
    {
        if (name.length > 6)
            return name.substring(0, maxLen) + "...";
        else
            return name;
    },

    /**
     * @brief 数字格式化
     * @param num 数字
     * @param digits 小数点保留位数(默认保留6位)
     * @return 格式化之后到数字
     */
   fromatBigNumber(num: number, digits: number = 2)
   {
        let ret = "";
        if (num < 10000)
        {
            ret = num.toFixed(digits).toString();
        }
        else if (num >= 10000 && num < 100000000)
        {
            num = num / 1000;
            ret = num.toFixed(digits).toString() + "万";
        }
        else if (num >= 100000000)
        {
            num = num / 100000000;
            ret = num.toFixed(digits).toString() + "亿";
        }
   },

   calculateBezierControlPt(from: cc.Vec2, to: cc.Vec2, t: number)
   {
        //cc.lerp(from, t, end)
   }
}


/*
namespace UITools
{
    export function seekChild(root_node:cc.Node, name:string): cc.Node
    {
        if(root_node.name == name)
            return root_node;

        let childCount = root_node.childrenCount;
        for (let i = 0; i < childCount; i++)
        {
            let v = this.seekChild(root_node.children[i], name);
            if (v != null)
                return v;
        }

        return null;
    }

    export function printInfo()
    {
        console.log('-----  printInfo')
    }
}
*/