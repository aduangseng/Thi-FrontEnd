const listCourse = document.querySelector('.list')

const getData =  async () => {
    const respone = await fetch('https://681cd0aff74de1d219ade53f.mockapi.io/courses')
    const data = await respone.json()

    if(data){
        listCourse.innerHTML = data.map(item => {
            return `
                        <div class="card" style="width: 18rem;">
                        <img src="imgs/${item.Image}" class="img" alt="...">
                        <div class="card-body">
                            <h5 class="TenSanPham">${item.Name}</h5>
                            <p class="GiaSanPham">${item.Price} VNĐ</p>
                            <a href="#" class="btn btn-primary">Thêm vào giỏ hàng</a>
                        </div>
                    </div>
            `
        })
    }
}
getData()